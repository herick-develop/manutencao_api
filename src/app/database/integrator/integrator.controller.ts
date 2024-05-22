import { Body, Controller, Post } from '@nestjs/common';
import { IntegratorService } from './integrator.service';


@Controller('integrator')
export class IntegratorController {
    constructor(
        private readonly integratorService: IntegratorService
    ) {}

    @Post('/login')
    async login(@Body('email') email: string, @Body('password') password: string){
        return this.integratorService.login(email, password);
    }
}