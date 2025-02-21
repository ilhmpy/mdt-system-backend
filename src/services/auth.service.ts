import { ExecutionContext, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { GuardService } from './guard.service';

@Injectable()
export class AuthService {
    constructor(private prisma: PrismaService, private GuardService: GuardService) {}

    getToken(context: ExecutionContext) {
        const request = this.GuardService.getRequest(context);

        return request.headers.authorization;
    }

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
