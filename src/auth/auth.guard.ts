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

    const res = await this.authService.isTokenValid(token);

    if (!res || !res.user) {
      throw new UnauthorizedException('Invalid auth token');
    }

    request.userId = res.user.id;

    return true;
  }
}
