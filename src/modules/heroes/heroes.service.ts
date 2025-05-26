import { Injectable } from '@nestjs/common';
import { HeroesDTO } from './heroes.dto';
import { PrismaService } from '../../database/PrismaServices';

@Injectable()
export class HeroesService {

    constructor(private prisma: PrismaService) { }

    async create(data: HeroesDTO) {
        if (!data || !data.nome) {
            throw new Error('O corpo da requisi��o deve incluir: { "imagem": string, "nome": string, "origem": string, "habilidades": string }');
        }

        const heroExist = await this.prisma.hero.findFirst({
            where: {
                nome: data.nome
            }
        })

        if (heroExist) {
            throw new Error(`${data.nome} j� existe`)
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

    async findAll() {
        return await this.prisma.hero.findMany();
    }

    async findOne(id: string) {
        const hero = await this.prisma.hero.findUnique({
            where: { id }
        });

        if (!hero) {
            throw new Error(`Heroi com id ${id} n�o encontrado`);
        }

        return hero;
    }

    async update(id: string, data: HeroesDTO) {
        const heroExist = await this.prisma.hero.findUnique({
            where: { id }
        });

        if (!heroExist) {
            throw new Error(`Heroi com id ${id} n�o encontrado`);
        }

        return await this.prisma.hero.update({
            where: { id },
            data
        });
    }

    async delete(id: string) {
        const heroExist = await this.prisma.hero.findUnique({
            where: { id }
        });

        if (!heroExist) {
            throw new Error(`Heroi com id ${id} n�o encontrado`);
        }

        return await this.prisma.hero.delete({
            where: { id }
        });
    }
}
