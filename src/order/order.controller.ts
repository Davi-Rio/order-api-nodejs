import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
    UseGuards,
} from '@nestjs/common';

import { CreateOrderDto } from './dto/create-order.dto';
import { OrderService } from './order.service';

import {
    ApiTags,
    ApiOperation,
    ApiParam,
    ApiResponse,
    ApiBody,
    ApiBearerAuth,
} from '@nestjs/swagger';

import { OrderResponseDto } from './dto/order-response.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@ApiTags('Order')
@ApiBearerAuth('JWT-auth')
@UseGuards(JwtAuthGuard)

// Controller responsável pelas operações de gerenciamento de pedidos
@Controller('order')
export class OrderController {

    constructor(private readonly orderService: OrderService) { }

    @Post()
    @ApiOperation({ summary: 'Criar um novo pedido' })
    @ApiBody({ type: CreateOrderDto })
    @ApiResponse({
        status: 201,
        description: 'Pedido criado com sucesso',
        type: OrderResponseDto,
    })
    async create(@Body() createOrderDto: CreateOrderDto) {
        return await this.orderService.create(createOrderDto);
    }

    @Get('list')
    @ApiOperation({ summary: 'Listar todos os pedidos' })
    @ApiResponse({
        status: 200,
        description: 'Lista de pedidos retornada com sucesso',
        type: [OrderResponseDto],
    })
    async findAll() {
        return await this.orderService.findAll();
    }

    @Get(':orderId')
    @ApiOperation({ summary: 'Buscar pedido pelo número do pedido' })
    @ApiParam({
        name: 'orderId',
        example: 'v10089015vdb',
        description: 'Número do pedido',
    })
    @ApiResponse({
        status: 200,
        description: 'Pedido encontrado com sucesso',
        type: OrderResponseDto,
    })
    async findOne(@Param('orderId') orderId: string) {
        return await this.orderService.findOne(orderId);
    }

    @Put(':orderId')
    @ApiOperation({ summary: 'Atualizar pedido existente' })
    @ApiParam({
        name: 'orderId',
        example: 'v10089015vdb',
        description: 'Número do pedido que será atualizado',
    })
    @ApiBody({ type: CreateOrderDto })
    @ApiResponse({
        status: 200,
        description: 'Pedido atualizado com sucesso',
        type: OrderResponseDto,
    })
    async update(
        @Param('orderId') orderId: string,
        @Body() updateOrderDto: CreateOrderDto,
    ) {
        return await this.orderService.update(orderId, updateOrderDto);
    }

    @Delete(':orderId')
    @ApiOperation({ summary: 'Remover pedido' })
    @ApiParam({
        name: 'orderId',
        example: 'v10089015vdb',
        description: 'Número do pedido que será removido',
    })
    @ApiResponse({
        status: 200,
        description: 'Pedido removido com sucesso',
        schema: {
            example: {
                message: 'Pedido removido com sucesso',
            },
        },
    })
    async remove(@Param('orderId') orderId: string) {
        return await this.orderService.remove(orderId);
    }
}