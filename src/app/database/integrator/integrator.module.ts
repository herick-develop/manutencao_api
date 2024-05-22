import { Module } from '@nestjs/common';
import { IntegratorController } from './integrator.controller';
import { IntegratorService } from './integrator.service';
import { IntegratorProvider } from './integrator.provider';
import { LoginProvider } from './login/login.provider';

@Module({
    controllers: [IntegratorController],
    providers: [IntegratorService, ...IntegratorProvider, ...LoginProvider]
})
export class IntegratorModule {}