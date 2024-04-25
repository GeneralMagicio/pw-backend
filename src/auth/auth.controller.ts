import {
  Controller,
  Get,
  Post,
  Body,
  Logger,
  UnauthorizedException,
  Res,
  Req,
  UseGuards,
  UnprocessableEntityException,
} from '@nestjs/common';

import { AuthService } from './auth.service';
import { PrismaService } from 'src/prisma.service';
import { Response } from 'express';
import { UsersService } from 'src/user/users.service';
import { AuthGuard } from './auth.guard';
import { LoginDTO } from './dto/login.dto';
import { ApiResponse } from '@nestjs/swagger';
import { AuthedReq } from 'src/utils/types/AuthedReq.type';
import { STAGING_API } from 'src/utils';
import { FlowService } from 'src/flow/flow.service';

@Controller({ path: 'auth' })
export class AuthController {
  private readonly logger = new Logger(AuthController.name);
  constructor(
    private readonly authService: AuthService,
    private readonly prismaService: PrismaService,
    private readonly usersService: UsersService,
    private readonly flowService: FlowService,
  ) {}

  @UseGuards(AuthGuard)
  @ApiResponse({
    status: 401,
    description: "You're not logged in",
  })
  @ApiResponse({
    status: 200,
    description: "You're logged in and the user object is returned",
  })
  @Get('/isLoggedIn')
  async isLoggedIn(@Req() req: AuthedReq) {
    return req.userId;
  }

  @Post('/logout')
  async logout(@Res() res: Response) {
    // expire the token from the db because the expiration time of the tokens are rather long
    res.clearCookie('auth', {
      httpOnly: true,
      sameSite: process.env.NODE_ENV === 'staging' ? 'none' : 'lax',
      domain: process.env.NODE_ENV === 'development' ? undefined : STAGING_API,
      secure: true,
    });
    res.send('Logged out.');
  }

  @ApiResponse({ status: 200, description: 'Sets an auth cookie' })
  @Post('/login')
  async login(@Res() res: Response, @Body() { message, signature }: LoginDTO) {
    const { address, nonce } = message;
    const isAuthentic = await this.authService.verifyUser(message, signature);
    if (!isAuthentic) throw new UnauthorizedException('Invalid signature');
    let user = await this.prismaService.user.findFirst({
      where: { address },
    });
    if (!user) {
      user = await this.usersService.create({ address, isBadgeHolder: true });
    }

    if (!user)
      throw new UnprocessableEntityException('User can not be created');

    await this.prismaService.nonce.deleteMany({
      where: {
        userId: user.id,
      },
    });

    await this.prismaService.nonce.updateMany({
      where: {
        nonce,
      },
      data: {
        userId: user.id,
        expiresAt: `${Date.now() + this.authService.TokenExpirationDuration}`,
      },
    });

    const hasEarlierShares = await this.prismaService.share.findFirst({
      where: { userId: user.id },
    });

    const isFirstLogin = hasEarlierShares === null;

    if (isFirstLogin) await this.flowService.populateInitialRanking(user.id);
    // res.cookie('auth', nonce, {
    //   httpOnly: true,
    //   sameSite: process.env.NODE_ENV === 'staging' ? 'none' : 'lax',
    //   domain: process.env.NODE_ENV === 'development' ? undefined : STAGING_API,
    //   secure: true,
    //   expires: new Date(Date.now() + this.authService.TokenExpirationDuration),
    // });

    // return nonce;

    res.status(200).send(nonce);
  }

  @ApiResponse({
    status: 200,
    type: String,
    description: 'a 48 character alphanumerical nonce is returned',
  })
  @Get('/nonce')
  async getNonce() {
    const nonce = this.authService.generateNonce();
    await this.prismaService.nonce.create({
      data: {
        nonce,
        expiresAt: `${Date.now() + this.authService.NonceExpirationDuration}`,
      },
    });
    return nonce;
  }
}
