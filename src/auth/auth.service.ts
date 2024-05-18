import { Injectable, Logger } from '@nestjs/common';
import { verifySignature } from 'thirdweb/auth';
import { generateRandomString } from 'src/utils';
import { PrismaService } from 'src/prisma.service';
import { chain, thirdwebClient } from 'src/thirdweb';

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);
  constructor(private readonly prismaService: PrismaService) {}

  /**
   * 48 hours
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

  verifyUser = async (message: string, signature: string, address: string) => {
    const isValid = await verifySignature({
      message,
      signature,
      address,
      client: thirdwebClient,
      chain,
    });

    return isValid;
  };
}
