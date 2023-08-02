import { Injectable, Logger } from '@nestjs/common';

import { generateRandomString } from 'src/utils';
import { SiweMessage, generateNonce } from 'siwe';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);
  constructor(private readonly prismaService: PrismaService) {}

  getUserId = async (walletAddress: string) => {
    const { id } = await this.prismaService.user.findFirst({
      select: { id: true },
      where: { address: walletAddress },
    });

    return id;
  };

  cleanUpExpiredNonces = async () => {
    await this.prismaService.nonce.deleteMany({
      where: {
        expires_at: {
          lt: `${Date.now()}`,
        },
      },
    });
  };

  generateNonce = () => {
    const nonce = generateRandomString({
      length: 48,
      lowercase: true,
      numerical: true,
      uppercase: true,
    });

    // Replace this with a cron job (or better with a key/value db)
    if (Math.random() < 0.2) setTimeout(() => this.cleanUpExpiredNonces(), 0);

    return nonce;
  };

  isNonceValid = async (nonce: string) => {
    const isValid = await this.prismaService.nonce.findFirst({
      where: { nonce },
    });

    if (isValid === null) throw new Error('Unavailable nonce');
    if (isValid.expires_at < `${Date.now()}`) throw new Error('Expired nonce');

    return true;
  };

  isTokenValid = async (token: string) => {
    const isValid = await this.prismaService.nonce.findFirst({
      where: {
        nonce: token,
        user_id: {
          not: null,
        },
        expires_at: {
          gt: `${Date.now()}`,
        },
      },
    });

    if (isValid === null) return false;

    return true;
  };

  verifyUser = async (message: SiweMessage, signature: any) => {
    const siweMessage = new SiweMessage(message);
    try {
      await this.isNonceValid(message.nonce);
      await siweMessage.verify({ signature });
      return true;
    } catch (err) {
      console.error('ERROR:', err);
      return false;
    }
  };

  // async login(
  //   email: string,
  //   password: string,
  //   twoFAToken?: string,
  // ): Promise<UserAuthToken> {
  //   const user = await this.usersService.findOne({
  //     where: { email },
  //     include: { artist: true },
  //   });

  //   if (!user) {
  //     throw new NotFoundException(`No user found for email: ${email}`);
  //   }

  //   if (user.status === UserStatus.RESTRICTED) {
  //     throw new UnauthorizedException('Your account is inactive');
  //   } else if (user.status === UserStatus.DELETED) {
  //     throw new UnauthorizedException('Your account is deleted');
  //   }

  //   const passwordValid = await Utils.validatePassword(password, user.password);

  //   if (user.twoFASecret) {
  //     if (!twoFAToken) {
  //       throw new UnauthorizedException('Two factor authentication required');
  //     } else {
  //       if (!this.isTwoFACodeValid(twoFAToken, user)) {
  //         throw new BadRequestException(
  //           'Invalid two factor authentication token',
  //         );
  //       }
  //     }
  //   }

  //   if (!passwordValid) {
  //     throw new BadRequestException('Invalid password');
  //   }

  //   if (isEmailNotVerified(user.status)) {
  //     await this.requestEmailVerification(email);
  //   }

  //   return {
  //     ...this.generateTokens({
  //       user_id: user.id,
  //     }),
  //     user,
  //   };
  // }

  // getUserFromToken(token: string): Promise<User> {
  //   const decodedToken = this.jwtService.decode(token);

  //   if (!decodedToken) {
  //     throw new BadRequestException('Invalid token');
  //   }

  //   return this.usersService.findOne({
  //     where: { id: decodedToken['user_id'] },
  //     include: { artist: true },
  //   });
  // }

  // private generateAccessToken(payload: { user_id: string }): string {
  //   const securityConfig = this.configService.get<SecurityConfig>('security');
  //   // TODO: Check if this is how to do this. This doesn't match the template
  //   return this.jwtService.sign(payload, {
  //     secret: securityConfig.jwt_access_secret,
  //     expiresIn: securityConfig.expiresIn,
  //   });
  // }

  // private generateRefreshToken(payload: { user_id: string }): string {
  //   const securityConfig = this.configService.get<SecurityConfig>('security');
  //   return this.jwtService.sign(payload, {
  //     secret: securityConfig.jwt_refresh_secret,
  //     expiresIn: securityConfig.refreshIn,
  //   });
  // }
}
