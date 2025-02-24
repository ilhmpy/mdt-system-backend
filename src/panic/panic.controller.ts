import { Controller, UseGuards, Put, Body, HttpException, Headers, Get, Head } from '@nestjs/common';
import { EventsGateway } from 'src/eventsgateway';
import { AuthGuard } from 'src/guards/auth/auth.guard';
import { RolesGuard } from 'src/guards/roles/roles.guard';
import { PrismaService } from 'src/prisma/prisma.service';
import { Panic } from '@prisma/client';

@Controller('panic')
export class PanicController {
    constructor(private prisma: PrismaService, private EventsGateway: EventsGateway) {}

    @Get("get-signals")
    @UseGuards(AuthGuard, RolesGuard) 
    async getSignals() {
        const signals = await this.prisma.panic.findMany();
        return signals;
    }

    @Put('activate-signal')
    @UseGuards(AuthGuard, RolesGuard)
    async activate(@Body() data: Panic) {
        const { officerId } = data;
        const panics = await this.prisma.panic.findMany({ where: { officerId }});

        if (panics.length > 0) {
            throw new HttpException("Your already used panic button", 400);
        } else {
            this.EventsGateway.server.emit("panicStatusIsChanged", data);
            await this.prisma.panic.create({ data });
        }
    }

    @Put('deactivate-signal')
    @UseGuards(AuthGuard, RolesGuard)
    async deactivate(@Headers("authorization") token: string, @Body() { officerId }: { officerId: number }) {
        const currentOfficer = await this.prisma.officer.findUnique({ where: { token }});

        if (currentOfficer) {
            if (currentOfficer.id == officerId) {
                try {
                    await this.prisma.panic.delete({ where: { officerId }})
                    this.EventsGateway.server.emit("panicStatusIsChanged", officerId);
                } catch(e) {
                    throw new HttpException("Panic is not defined", 200);
                }
            } else {
                throw new HttpException("Your not allow to change panic status from officers", 300);
            }
        } else {
            throw new HttpException("This officer not exist", 404);
        }
    }
} 
 