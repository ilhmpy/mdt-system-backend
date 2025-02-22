import { Body, Controller, Get, Head, Headers, Put, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/guards/auth/auth.guard';
import { RolesGuard } from 'src/guards/roles/roles.guard';
import { PrismaService } from 'src/prisma/prisma.service';
import { OfficersService } from './officers.service';
import { Officer, Status } from '@prisma/client';

@Controller('officers')
export class OfficersController {
    constructor(private prisma: PrismaService, private OfficersService: OfficersService) {}

    @Get("get-officer")
    @UseGuards(AuthGuard, RolesGuard)
    async getOfficer(@Headers("authorization") token: string) {
        const officer = await this.prisma.officer.findUnique(
            { 
                where: { token }, 
                include: { rank: true, marking: true, shift: true, role: { include: { permissions: true } } }
            }
        ).catch(e => console.log("getOfficer Error", e));

        return this.OfficersService.formating(officer);
    }

    @Get("get-officers")
    @UseGuards(AuthGuard, RolesGuard)
    async getOfficers() {
        const officers: Officer[] = await this.prisma.officer.findMany({ 
            include: { rank: true, marking: true, shift: true, role: { include: { permissions: true } } }
        });
        let formattedOfficers: Officer[] = [];

        for (let officer of officers) {
            formattedOfficers.push(this.OfficersService.formating(officer));
        }

        return formattedOfficers;
    }

    @Put("update-status")
    @UseGuards(AuthGuard, RolesGuard)
    updateStatus(@Headers("authorization") token: string, @Body() { status }: { status: Status }) {
        const updatedOfficer = this.prisma.officer.update({ 
            where: { token },
            data: { status }  
        }).catch(e => console.log("Prisma updateStatus Error", e));

        return updatedOfficer;
    }
}   
