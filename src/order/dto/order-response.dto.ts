import { ApiProperty } from '@nestjs/swagger';

export class ItemResponseDto {

    @ApiProperty({ example: 2434 })
    productId: number;

    @ApiProperty({ example: 1 })
    quantity: number;

    @ApiProperty({ example: 1000 })
    price: number;

}

export class OrderResponseDto {

    @ApiProperty({ example: 1 })
    id: number;

    @ApiProperty({ example: 'v10089015vdb' })
    orderId: string;

    @ApiProperty({ example: 10000 })
    value: number;

    @ApiProperty({ example: '2023-07-19T12:24:11.529Z' })
    creationDate: string;

    @ApiProperty({ type: [ItemResponseDto] })
    items: ItemResponseDto[];

}