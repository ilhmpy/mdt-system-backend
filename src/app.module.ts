import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './services/auth.service';
import { OfficersController } from './officers/officers.controller';
import { RolesService } from './services/roles.service';
import { GuardService } from './services/guard.service';
import { OfficersService } from './officers/officers.service';
import { EventsGateway } from './eventsgateway';

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
    EventsGateway,
  ],
  
  exports: [
    PrismaService, 
    AuthService, 
    RolesService,
    GuardService,
    OfficersService,
    EventsGateway
  ]
})
export class AppModule {}
