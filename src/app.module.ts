import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './services/auth.service';
import { OfficersController } from './officers/officers.controller';
import { RolesService } from './services/roles.service';
import { GuardService } from './services/guard.service';
import { OfficersService } from './officers/officers.service';

@Module({
  imports: [],
  controllers: [
    OfficersController,
    AuthController
  ],

  providers: [
    PrismaService, 
    AuthService, 
    RolesService,
    GuardService,
    OfficersService,
  ],
  
  exports: [
    PrismaService, 
    AuthService, 
    RolesService,
    GuardService,
    OfficersService,
  ]
})
export class AppModule {}
