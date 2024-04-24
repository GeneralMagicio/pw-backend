import { Injectable, Logger } from '@nestjs/common';

import { generateRandomString } from 'src/utils';
import { SiweMessage } from 'siwe';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);
  constructor(private readonly prismaService: PrismaService) {}

  /**
   * 24 hours
   */
  public TokenExpirationDuration = 48 * 60 * 60 * 1000;

  /**
   * 2 minutes
   */
  public NonceExpirationDuration = 2 * 60 * 1000;

  // getUserId = async (walletAddress: string) => {
  //   const { id } = await this.prismaService.user.findFirst({
  //     select: { id: true },
  //     where: { address: walletAddress },
  //   });

  //   return id;
  // };

  cleanUpExpiredNonces = async () => {
    await this.prismaService.nonce.deleteMany({
      where: {
        expiresAt: {
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
    if (isValid.expiresAt < `${Date.now()}`) throw new Error('Expired nonce');

    return true;
  };

  isTokenValid = async (token: string) => {
    const user = await this.prismaService.nonce.findFirst({
      select: { user: true },
      where: {
        nonce: token,
        userId: {
          not: null,
        },
        expiresAt: {
          gt: `${Date.now()}`,
        },
      },
    });

    if (user === null) return false;

    return user;
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
}
