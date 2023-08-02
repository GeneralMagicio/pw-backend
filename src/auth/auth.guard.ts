import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = request.cookies?.auth;

    if (!token) {
      throw new UnauthorizedException();
    }

    const user = await this.authService.isTokenValid(token);

    if (!user) {
      throw new UnauthorizedException('Invalid auth token');
    }

    request.user = user;

    return true;
  }
}
