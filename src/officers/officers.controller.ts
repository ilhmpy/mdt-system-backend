import { Body, Controller, Get, Head, Headers, HttpException, Put, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/guards/auth/auth.guard';
import { RolesGuard } from 'src/guards/roles/roles.guard';
import { PrismaService } from 'src/prisma/prisma.service';
import { OfficersService } from './officers.service';
import { Marking, Officer, Status } from '@prisma/client';
import { EventsGateway } from 'src/eventsgateway';

@Controller('officers')
export class OfficersController {
    constructor(private prisma: PrismaService, private OfficersService: OfficersService, private EventsGateway: EventsGateway) {}

    @Get("get-officer")
    @UseGuards(AuthGuard, RolesGuard)
    async getOfficer(@Headers("authorization") token: string) {
        const officer = await this.prisma.officer.findUnique(
            { 
                where: { token }, 
                include: this.OfficersService.getOfficerInclude()
            }
        ).catch(e => console.log("getOfficer Error", e));

        return this.OfficersService.formating(officer);
    }

    @Get("get-officers")
    @UseGuards(AuthGuard, RolesGuard)
    async getOfficers() {
        const officers: Officer[] = await this.prisma.officer.findMany({ include: this.OfficersService.getOfficerInclude() });

        return this.OfficersService.formattingAll(officers);
    }

    @Get("get-markings")
    @UseGuards(AuthGuard, RolesGuard)
    async getMarkings() {
        const markings: Marking[] = await this.prisma.marking.findMany();

        return markings;
    }

    @Put("update-status")
    @UseGuards(AuthGuard, RolesGuard)
    async updateStatus(@Headers("authorization") token: string, @Body() { status }: { status: Status }) {
        const updatedOfficer = await this.prisma.officer.update({ 
            where: { token },
            data: { status },
            include: this.OfficersService.getOfficerInclude()
        });

        this.EventsGateway.server.emit("updateOfficers", this.OfficersService.formating(updatedOfficer))
        return null;
    }

    @Put("update-marking")
    @UseGuards(AuthGuard, RolesGuard)
    async updateMarking(
        @Headers("authorization") token: string, 
        @Body() { markingId, markingNumber }: { markingId: number; markingNumber: number }
    ) {
        const marking = await this.prisma.marking.findUnique({ where: { id: markingId }});

        if (marking) {
            const officers = await this.prisma.officer.findMany({ where: { markingId, markingNumber }});
            const currentOfficer = officers.find((officer) => officer.token == token);

            if ( 
                currentOfficer?.markingNumber != markingNumber && 
                currentOfficer?.markingId !== markingId
            ) {
                if (marking.pairedPatrolCrew) {
                    if (officers.length >= 4) {
                        throw new HttpException("Too much officers have this marking(and marking number)", 400);
                    } else {
                        await this.OfficersService.updateMarking(token, markingId, markingNumber);
                    }
                } else {
                    if (officers.length == 0) {
                        await this.OfficersService.updateMarking(token, markingId, markingNumber);
                    } else {
                        throw new HttpException("This marking is not paired, your don't allow to be second officer", 300);
                    }
                }
            } else {
                throw new HttpException("Your marking is the same as a previouse one", 300);
            }
        }

        return null;
    }
}   
