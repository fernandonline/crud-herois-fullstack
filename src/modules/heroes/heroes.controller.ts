import { Body, Controller, Get, Post, UsePipes } from '@nestjs/common';
import { HeroesService } from './heroes.service';
import { HeroesDTO } from './heroes.dto';
import { ValidationPipe } from '@nestjs/common';

@Controller('heroes')
export class HeroesController {
    constructor(private readonly heroesService: HeroesService) { }

    @Post()
    @UsePipes(new ValidationPipe()) // Valida o DTO automaticamente
    async create(@Body() data: HeroesDTO) {
        return this.heroesService.create(data);
    }

    @Get()
    async findAll() {
        return this.heroesService.findAll();
    }
}