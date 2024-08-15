import {
  ForbiddenException,
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { verifySignature } from 'thirdweb/auth';
import { generateRandomString } from 'src/utils';
import { PrismaService } from 'src/prisma.service';
import { ethers } from 'ethers';
import { SiweMessage } from 'siwe';
// import { chain, thirdwebClient } from 'src/thirdweb';

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

  assignOtp = async (userId: number) => {
    const [record, user] = await Promise.all([
      this.prismaService.otp.findFirst({
        where: {
          userId,
          expiresAt: {
            gte: `${Date.now()}`,
          },
        },
        include: { user: true },
      }),
      this.prismaService.user.findUnique({
        where: { id: userId },
        select: { badges: true, identity: true },
      }),
    ]);

    if (!user) throw new InternalServerErrorException("User doesn't exist");

    if (user.identity?.valueOf() || user.badges?.valueOf())
      throw new ForbiddenException('User has already connected');

    if (record) return record.otp;

    const otp = generateRandomString({ length: 6, numerical: true });
    await this.prismaService.otp.deleteMany({
      where: {
        userId,
      },
    });
    await this.prismaService.otp.create({
      data: {
        otp,
        userId,
        expiresAt: `${Date.now() + 4 * 60 * 60 * 1000}`, // 4 hours
      },
    });

    return otp;
  };

  checkOtpValidity = async (otp: string) => {
    const record = await this.prismaService.otp.findFirst({
      where: {
        otp,
        expiresAt: {
          gte: `${Date.now()}`,
        },
      },
      include: { user: true },
    });

    if (!record) return false;

    return record.user.id;
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
      // await this.isNonceValid(message.nonce);
      await siweMessage.verify({ signature });
      return true;
    } catch (err) {
      return false;
    }
  };
}
