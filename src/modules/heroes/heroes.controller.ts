import { Body, Controller, Post } from '@nestjs/common';
import { HeroesService } from './heroes.service';
import { HeroesDTO } from './heroes.dto'

@Controller('heroes')
export class HeroesController {
    constructor(private readonly heroesService: HeroesService) { }

    @Post()
    async create(@Body() data: HeroesDTO) {
        return this.heroesService.create(data);
    }
}
