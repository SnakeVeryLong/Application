import { Controller, Post, Get } from '@nestjs/common';


@Controller('controller')
export class ControllerController {
    @Post()
    create(): string {
        return 'New Text';
    }

    @Get()
    findAll(): string {
        return 'All Text';
    }
}
