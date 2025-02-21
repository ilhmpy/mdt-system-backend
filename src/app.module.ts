import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { OfficersService } from './officers/officers.service';
import { AuthService } from './auth/auth.service';
import { OfficersController } from './officers/officers.controller';
import { AuthController } from './auth/auth.controller';

@Module({
  imports: [],

  controllers: [
    OfficersController,
    AuthController
  ],
  providers: [PrismaService],
  exports: [PrismaService]
})
export class AppModule {}
