import {
  Controller,
  Get,
  Post,
  Body,
  Logger,
  UnauthorizedException,
  Res,
} from '@nestjs/common';

import { AuthService } from './auth.service';
import { PrismaService } from 'src/prisma.service';
import { SiweMessage } from 'siwe';
import { Response } from 'express';
import { UsersService } from 'src/user/users.service';
import { hashData } from 'src/utils';

@Controller({ path: 'auth' })
export class AuthController {
  private readonly logger = new Logger(AuthController.name);
  constructor(
    private readonly authService: AuthService,
    private readonly prismaService: PrismaService,
    private readonly usersService: UsersService,
  ) {}

  @Post('/login')
  async login(
    @Res() res: Response,
    @Body('message') message: SiweMessage,
    @Body('signature') signature: any,
  ) {
    this.logger.log(message);
    this.logger.log(signature);
    const { address, nonce } = message;
    const isAuthentic = this.authService.verifyUser(message, signature);
    if (!isAuthentic) throw new UnauthorizedException();
    let user = await this.prismaService.user.findFirst({
      where: { address: await hashData(address) },
    });
    if (!user) {
      user = await this.usersService.create({ address, isBadgeHolder: true });
    }

    console.log('Reached here!');

    this.prismaService.nonce.updateMany({
      where: {
        nonce,
      },
      data: {
        user_id: user.id,
        expires_at: `${Date.now() + 30 * 60 * 1000}`, // in 30 mins
      },
    });

    console.log('Reached here! 2');
    // Put the nonce as a http-only cookie in the client's browser

    res.cookie('auth', nonce, {
      httpOnly: true,
      secure: true,
      expires: new Date(Date.now() + 30 * 60 * 1000),
    });

    console.log('Reached here! 3');
    return 'Success';
  }

  @Get('/nonce')
  async getNonce() {
    const nonce = this.authService.generateNonce();
    await this.prismaService.nonce.create({
      data: {
        nonce,
        expires_at: `${Date.now() + 2 * 60 * 1000}`, // in 1 mins
      },
    });
    return nonce;
  }
}
