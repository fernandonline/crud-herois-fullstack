import { Injectable } from '@nestjs/common';
import { HeroesDTO } from './heroes.dto';
import { PrismaService } from '../../../database/PrismaServices';

@Injectable()
export class HeroesService {

    constructor(private prisma: PrismaService) { }

    async create(data: HeroesDTO) {

        const heroExist = await this.prisma.hero.findFirst({
            where: {
                nome: data.nome
            }
        })

        if (heroExist) {
            throw new Error(`${data.nome} já existe`)
        }

        const hero = await this.prisma.hero.create({
            data: {
                imagem: data.imagem,
                nome: data.nome,
                origem: data.origem,
                habilidades: data.habilidades,
            },
        });
        return hero;
    }
}
