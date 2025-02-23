import { Controller, UseGuards, Put, Body } from '@nestjs/common';
import { EventsGateway } from 'src/eventsgateway';
import { AuthGuard } from 'src/guards/auth/auth.guard';
import { RolesGuard } from 'src/guards/roles/roles.guard';
import { PrismaService } from 'src/prisma/prisma.service';

@Controller('panic')
export class PanicController {
    constructor(private prisma: PrismaService, private EventsGateway: EventsGateway) {}

    @Put('activate-signal')
    @UseGuards(AuthGuard, RolesGuard)
    activate(@Body() body: { id: number; lastUpdate: Date; name: string; badgeNumber: string; location: string }
    ) {
        this.EventsGateway.server.emit("panicIsActivated", body);
    }
}
