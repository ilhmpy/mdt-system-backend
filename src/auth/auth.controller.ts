import { Controller, Get, Headers } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private AuthService: AuthService) {}

    @Get('is-auth')
    isAuth(@Headers('authorization') token: string) {
        return this.AuthService.isTokenCorrect(token);
    }
}
