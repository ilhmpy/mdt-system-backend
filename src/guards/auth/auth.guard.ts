import { CanActivate, ExecutionContext, Injectable, Headers } from '@nestjs/common';
import { firstValueFrom, Observable } from 'rxjs';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthService } from 'src/services/auth.service';
import { RolesService } from 'src/services/roles.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private AuthService: AuthService) {}

  canActivate(
    context: ExecutionContext
  ): boolean | Promise<boolean> | Observable<boolean> {
    return this.AuthService.isTokenCorrect(this.AuthService.getToken(context));
  }
}
