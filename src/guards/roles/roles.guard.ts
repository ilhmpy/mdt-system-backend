import { CanActivate, ExecutionContext, Injectable, Headers } from '@nestjs/common';
import { Observable } from 'rxjs';
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

    const permissions = officer?.role?.permissions;
    const correspondendPermission = 
      permissions?.find(
        (permission) => permission.canActivateName == canActivateName.pageName
      );

    switch(canActivateName.pageName) {
      case ("officers"): {
        if (canActivateName.reqName === "get-officer" || canActivateName.reqName === "get-officers") {
          return !!correspondendPermission?.get;
        }
      }
    }

    return false;
  }
}
