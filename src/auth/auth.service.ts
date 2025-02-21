import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthService {
    constructor(private prisma: PrismaService) {}

    async isTokenCorrect(token: string) {
        const isCorrect = await this.prisma.officer.findUnique({
            where: {
                token
            }
        }).catch((e) => {
            console.log("isTokenCorrect/AuthServiceError", e);
        });

        return token == isCorrect?.token;
    }
}
