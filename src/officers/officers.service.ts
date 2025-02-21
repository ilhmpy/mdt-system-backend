import { Injectable } from '@nestjs/common';
import { Officer } from '@prisma/client';

@Injectable()
export class OfficersService {
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
}
