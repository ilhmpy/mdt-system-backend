import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './services/auth.service';
import { OfficersController } from './officers/officers.controller';
import { RolesService } from './services/roles.service';
import { GuardService } from './services/guard.service';
import { OfficersService } from './officers/officers.service';
import { EventsGateway } from './eventsgateway';
import { PanicController } from './panic/panic.controller';
import { PanicService } from './panic/panic.service';

@Module({
  imports: [],
  controllers: [
    OfficersController,
    AuthController,
    PanicController
  ],

  providers: [
    PrismaService, 
    AuthService, 
    RolesService,
    GuardService,
    OfficersService,
    EventsGateway,
    PanicService,
  ],
  
  exports: [
    PrismaService, 
    AuthService, 
    RolesService,
    GuardService,
    OfficersService,
    EventsGateway,
    PanicService,
  ]
})
export class AppModule {}
