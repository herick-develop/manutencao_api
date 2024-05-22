import { Module } from '@nestjs/common';
import { SupportModule } from './support/support.module';
import { IntegratorModule } from './integrator/integrator.module';

@Module({
    imports: [SupportModule, IntegratorModule],
    providers: []
})
export class DatabaseModule {}
