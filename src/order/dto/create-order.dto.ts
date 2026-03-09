import { IsString, IsNumber, IsArray, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateItemDto {

    @IsString()
    idItem: string;

    @IsNumber()
    quantidadeItem: number;

    @IsNumber()
    valorItem: number;

}

export class CreateOrderDto {

    @IsString()
    numeroPedido: string;

    @IsNumber()
    valorTotal: number;

    @IsString()
    dataCriacao: string;

    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CreateItemDto)
    items: CreateItemDto[];

}