import { Module } from '@nestjs/common';
import { SupportController } from './support.controller';
import { SupportService } from './support.service';
import { SupportProvider } from './support.provider';
import { CallProvider } from './call/call.provider';

@Module({
  controllers: [SupportController],
  providers: [SupportService, ...SupportProvider, ...CallProvider]
})
export class SupportModule {}
