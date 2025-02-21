import { Controller, Get, Headers, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/guards/auth/auth.guard';
import { RolesGuard } from 'src/guards/roles/roles.guard';
import { PrismaService } from 'src/prisma/prisma.service';
import { OfficersService } from './officers.service';
import { Officer } from '@prisma/client';

@Controller('officers')
export class OfficersController {
    constructor(private prisma: PrismaService, private OfficersService: OfficersService) {}

    @Get("get-officer")
    @UseGuards(RolesGuard)
    @UseGuards(AuthGuard)
    async getOfficer(@Headers("authorization") token: string) {
        const officer = await this.prisma.officer.findUnique(
            { 
                where: { token }, 
                include: { rank: true, marking: true, role: { include: { permissions: true } } }
            }
        ).catch(e => console.log("getOfficer Error", e));

        return this.OfficersService.formating(officer);
    }

    @Get("get-officers")
    @UseGuards(RolesGuard)
    @UseGuards(AuthGuard)
    async getOfficers() {
        const officers: Officer[] = await this.prisma.officer.findMany({ 
            include: { rank: true, marking: true, role: { include: { permissions: true } } }
        });
        let formattedOfficers: Officer[] = [];

        for (let officer of officers) {
            formattedOfficers.push(this.OfficersService.formating(officer));
        }

        return formattedOfficers;
    }
}   
