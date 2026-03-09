import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { OrderService } from './order.service';

@Controller('order')
export class OrderController {
    constructor(private readonly orderService: OrderService) { }

    @Post()
    async create(@Body() createOrderDto: CreateOrderDto) {
        return await this.orderService.create(createOrderDto);
    }

    @Get('list')
    async findAll() {
        return await this.orderService.findAll();
    }

    @Get(':orderId')
    async findOne(@Param('orderId') orderId: string) {
        return await this.orderService.findOne(orderId);
    }

    @Put(':orderId')
    async update(
        @Param('orderId') orderId: string,
        @Body() updateOrderDto: CreateOrderDto,
    ) {
        return await this.orderService.update(orderId, updateOrderDto);
    }

    @Delete(':orderId')
    async remove(@Param('orderId') orderId: string) {
        return await this.orderService.remove(orderId);
    }
}