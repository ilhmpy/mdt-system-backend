import { Body, Controller, Get, HttpException, Query, UseGuards } from '@nestjs/common';
import { Car, Civil, Weapon } from '@prisma/client';
import { AuthGuard } from 'src/guards/auth/auth.guard';
import { RolesGuard } from 'src/guards/roles/roles.guard';
import { PrismaService } from 'src/prisma/prisma.service';

const civilInclude = {
    history: true,
    cars: {
        include: {
            history: true
        }
    },
    weapons: {
        include: {
            history: true
        }
    }
}

const autoInclude = {
    history: true,
    civil: {
        include: civilInclude
    }
}

@Controller('ncinc')
export class NcincController {
    constructor(private prisma: PrismaService) {}

    @Get("get-civil")
    @UseGuards(AuthGuard, RolesGuard)
    async getCivil(@Query('name') name?: string, @Query('idcard') idCard?: string, @Query("id") id?: number) {
        let civil: Civil[] = [];
        if (name) {
            civil = await this.prisma.civil.findMany({ where: { name }, include: civilInclude });
        } else if (idCard) {
            civil = await this.prisma.civil.findMany({ where: { idCard }, include: civilInclude });
        } else if (id) {
            civil = await this.prisma.civil.findMany({ where: { id: Number(id) }, include: civilInclude });
        } else {
            throw new HttpException("Not allowed param for this request", 404);
        } 

        if (civil.length > 0) {
            return civil;
        } else {
            throw new HttpException("Civil doesn't exist", 404);
        }
    }

    @Get("get-auto")
    @UseGuards(AuthGuard, RolesGuard)
    async getAuto(@Query("plate") plate?: string, @Query("id") id?: number) {
        let auto: Car[] = [];

        if (plate) {
            auto = await this.prisma.car.findMany({ where: { plate }, include: autoInclude });
        } else if (id) {
            auto = await this.prisma.car.findMany({ where: { id: Number(id) }, include: autoInclude });
        } else {
            throw new HttpException("Not allowed param for this request", 404);
        }

        if (auto.length > 0) {
            return auto;
        } else {
            throw new HttpException("Auto doesn't exist", 404);
        }
    }

    @Get("get-weapon")
    @UseGuards(AuthGuard, RolesGuard)
    async getWeapon(@Query("serial") serial: string, @Query("id") id: number) {
        let weapon: Weapon[] = [];

        if (serial) {
            weapon = await this.prisma.weapon.findMany({ where: { serial }, include: autoInclude });
        } else if (id) {
            weapon = await this.prisma.weapon.findMany({ where: { id: Number(id) }, include: autoInclude })
        } else {
            throw new HttpException("Not allowed param for this request", 404);
        }

        if (weapon.length > 0) {
            return weapon;
        } else {
            throw new HttpException("Weapon doesn't exist", 404);
        }
    }
}
