import { IsString, IsNotEmpty } from 'class-validator';

export class HeroesDTO {
    @IsString()
    @IsNotEmpty()
    imagem: string;

    @IsString()
    @IsNotEmpty()
    nome: string;

    @IsString()
    @IsNotEmpty()
    origem: string;

    @IsString()
    @IsNotEmpty()
    habilidades: string;
}