import { Body, Controller, Get, Post, Put, Delete, UsePipes, Param } from '@nestjs/common';
import { HeroesService } from './heroes.service';
import { HeroesDTO } from './heroes.dto';
import { ValidationPipe } from '@nestjs/common';

@Controller('heroes')
export class HeroesController {
    constructor(private readonly heroesService: HeroesService) { }

    @Post()
    @UsePipes(new ValidationPipe())
    async create(@Body() data: HeroesDTO) {
        return this.heroesService.create(data);
    }

    @Get()
    async findAll() {
        return this.heroesService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string) {
        return this.heroesService.findOne(Number(id));
    }

    @Put(':id')
    @UsePipes(new ValidationPipe())
    async update(@Param('id') id: string, @Body() data: HeroesDTO) {
        return this.heroesService.update(Number(id), data);
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        return this.heroesService.delete(Number(id));
    }
}
