import { Body, Controller, Get, Head, Headers, Put, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/guards/auth/auth.guard';
import { RolesGuard } from 'src/guards/roles/roles.guard';
import { PrismaService } from 'src/prisma/prisma.service';
import { OfficersService } from './officers.service';
import { Officer, Status } from '@prisma/client';
import { EventsGateway } from 'src/eventsgateway';

const include = { 
    rank: true,
    marking: true, 
    shift: true, 
    role: { 
        include: { 
            permissions: true 
        }
    } 
}

@Controller('officers')
export class OfficersController {
    constructor(private prisma: PrismaService, private OfficersService: OfficersService, private EventsGateway: EventsGateway) {}

    @Get("get-officer")
    @UseGuards(AuthGuard, RolesGuard)
    async getOfficer(@Headers("authorization") token: string) {
        const officer = await this.prisma.officer.findUnique(
            { 
                where: { token }, 
                include
            }
        ).catch(e => console.log("getOfficer Error", e));

        return this.OfficersService.formating(officer);
    }

    @Get("get-officers")
    @UseGuards(AuthGuard, RolesGuard)
    async getOfficers() {
        const officers: Officer[] = await this.prisma.officer.findMany({ include });
        /*let formattedOfficers: Officer[] = [];

        for (let officer of officers) {
            formattedOfficers.push(this.OfficersService.formating(officer));
        }*/

        return this.OfficersService.formattingAll(officers);
    }

    @Put("update-status")
    @UseGuards(AuthGuard, RolesGuard)
    async updateStatus(@Headers("authorization") token: string, @Body() { status }: { status: Status }) {
        const updatedOfficer = await this.prisma.officer.update({ 
            where: { token },
            data: { status },
            include
        });

        this.EventsGateway.server.emit("updateOfficers", this.OfficersService.formating(updatedOfficer))
        return "";
    }
}   
