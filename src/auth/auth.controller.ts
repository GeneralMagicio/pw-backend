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
} from '@nestjs/common';

import { AuthService } from './auth.service';
import { PrismaService } from 'src/prisma.service';
import { Response } from 'express';
import { UsersService } from 'src/user/users.service';
import { AuthGuard } from './auth.guard';
import { LoginDTO } from './dto/login.dto';
import { ApiResponse } from '@nestjs/swagger';

@Controller({ path: 'auth' })
export class AuthController {
  private readonly logger = new Logger(AuthController.name);
  constructor(
    private readonly authService: AuthService,
    private readonly prismaService: PrismaService,
    private readonly usersService: UsersService,
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
  async isLoggedIn(@Req() req) {
    return req.user;
  }

  @Post('/logout')
  async logout(@Res() res: Response) {
    // expire the token from the db because the expiration time of the tokens are rather long
    res.clearCookie('auth', {
      httpOnly: true,
      sameSite: process.env.NODE_ENV === 'staging' ? 'none' : 'lax',
      domain:
        process.env.NODE_ENV === 'staging'
          ? 'pairwise.iran.liara.run'
          : undefined,
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

    await this.prismaService.nonce.deleteMany({
      where: {
        user_id: user.id,
      },
    });

    await this.prismaService.nonce.updateMany({
      where: {
        nonce,
      },
      data: {
        user_id: user.id,
        expires_at: `${Date.now() + 30 * 60 * 1000}`, // in 30 mins
      },
    });

    res.cookie('auth', nonce, {
      httpOnly: true,
      sameSite: process.env.NODE_ENV === 'staging' ? 'none' : 'lax',
      domain:
        process.env.NODE_ENV === 'staging'
          ? 'pairwise.iran.liara.run'
          : undefined,
      secure: true,
      expires: new Date(Date.now() + 30 * 60 * 1000),
    });

    res.status(200).send('Success');
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
        expires_at: `${Date.now() + 2 * 60 * 1000}`, // in 2 mins
      },
    });
    return nonce;
  }
}
