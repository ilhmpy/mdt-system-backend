import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { OfficersController } from './officers/officers.controller';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';

@Module({
  imports: [],

  controllers: [
    OfficersController,
    AuthController
  ],

  providers: [PrismaService, AuthService],
  exports: [PrismaService, AuthService]
})
export class AppModule {}
