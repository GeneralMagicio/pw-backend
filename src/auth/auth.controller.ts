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
import { SiweMessage } from 'siwe';
import { Response } from 'express';
import { UsersService } from 'src/user/users.service';
import { AuthGuard } from './auth.guard';

@Controller({ path: 'auth' })
export class AuthController {
  private readonly logger = new Logger(AuthController.name);
  constructor(
    private readonly authService: AuthService,
    private readonly prismaService: PrismaService,
    private readonly usersService: UsersService,
  ) {}

  @UseGuards(AuthGuard)
  @Get('/isLoggedIn')
  async isLoggedIn(@Req() req) {
    return req.user;
  }

  @Post('/login')
  async login(
    @Res() res: Response,
    @Body('message') message: SiweMessage,
    @Body('signature') signature: any,
  ) {
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
      secure: true,
      expires: new Date(Date.now() + 30 * 60 * 1000),
    });

    res.status(200).send('Success');
  }

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
