import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { SupportService } from './support.service';

@Controller('support')
export class SupportController {
    constructor(
        private readonly supportService: SupportService
    ) {}

    @Get('/listCall/:sectorID')
    async listCall(@Param('sectorID') id: number) {
        return this.supportService.listCall(id);
    }

    @Post('/deleteCall')
    async deleteCall(@Body('id') id: number){
        return this.supportService.deleteCall(id);
    }
}
