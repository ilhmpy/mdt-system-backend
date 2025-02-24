import { CanActivate, ExecutionContext, Injectable, Headers } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthService } from 'src/services/auth.service';
import { RolesService } from 'src/services/roles.service';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(
    private RolesService: RolesService, 
    private prisma: PrismaService, 
    private AuthService: AuthService
  ) {}

  async canActivate(
    context: ExecutionContext
  ): Promise<boolean> {
      const token: string = this.AuthService.getToken(context);
      const canActivateName = this.RolesService.getRolesCanActivateName(context);

      const officer = await this.prisma.officer.findUnique({ 
          where: {
            token
          },
          include: {
            role: {
              include: {
                permissions: true
              }
            }
          }
      }).catch(e => {
        console.log(e);
      })

      const permissionsMap = new Map(
        officer?.role?.permissions?.map((p) => [p.canActivateName, p]) ?? []
      );
  
      const correspondendPermission = permissionsMap.get(canActivateName.pageName);

      const permissionsCheck: Record<string, boolean> = {
        "get-officer": !!correspondendPermission?.get,
        "get-officers": !!correspondendPermission?.get,
        "update-status": !!correspondendPermission?.selfUpdate,
        "get-markings": !!correspondendPermission?.get,
        "update-marking": !!correspondendPermission?.selfUpdate,
        "activate-signal": !!correspondendPermission?.selfUpdate,
        "deactivate-signal": !!correspondendPermission?.selfUpdate,
        "get-signals": !!correspondendPermission?.get
      };
      
      return permissionsCheck[canActivateName.reqName] ?? false;
  }
}
