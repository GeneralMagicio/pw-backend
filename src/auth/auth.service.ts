import { Injectable, Logger } from '@nestjs/common';

import { generateRandomString } from 'src/utils';
import { SiweMessage } from 'siwe';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);
  constructor(private readonly prismaService: PrismaService) {}

  /**
   * 12 hours
   */
  public TokenExpirationDuration = 12 * 60 * 60 * 1000; // 12 hours

  /**
   * 2 minutes
   */
  public NonceExpirationDuration = 2 * 60 * 1000; // 2 minutes

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
    const user = await this.prismaService.nonce.findFirst({
      select: { user: true },
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
