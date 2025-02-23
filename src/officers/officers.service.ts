import { Injectable } from '@nestjs/common';
import { Officer } from '@prisma/client';
import { EventsGateway } from 'src/eventsgateway';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class OfficersService {
    constructor(private prisma: PrismaService, private EventsGateway: EventsGateway) {}

    getOfficerInclude() {
        return { 
            rank: true,
            marking: true, 
            shift: true, 
            role: { 
                include: { 
                    permissions: true 
                }
            } 
        }
    }

    formating(officer: any) {
        delete officer?.token
 
        return { 
            ...officer,
             status: 
                    officer?.status === "true" || officer?.status === "false" 
                    ? 
                    JSON.parse(officer?.status) : officer?.status 
        }
    }

    formattingAll(officers) {
        return officers.map((officer) => this.formating(officer));
    }

    async updateMarking(token: string, markingId: number, markingNumber: number) {
        const updatedOfficer = await this.prisma.officer.update({ 
            where: { token },
            data: { lastUpdate: new Date(), markingId, markingNumber },
            include: this.getOfficerInclude()
        });
    
        this.EventsGateway.server.emit("updateOfficers", this.formating(updatedOfficer))
    }
}
