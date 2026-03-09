import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Order } from './entities/order.entity/order.entity';
import { Item } from './entities/item.entity/item.entity';
import { CreateOrderDto } from './dto/create-order.dto';
import { OrderMapper } from './mappers/order.mapper';

@Injectable()
export class OrderService {
    constructor(
        @InjectRepository(Order)
        private readonly orderRepository: Repository<Order>,

        @InjectRepository(Item)
        private readonly itemRepository: Repository<Item>,
    ) { }

    async create(createOrderDto: CreateOrderDto): Promise<Order> {
        const mappedOrder = OrderMapper.toEntity(createOrderDto);

        const existingOrder = await this.orderRepository.findOne({
            where: { orderId: mappedOrder.orderId },
        });

        if (existingOrder) {
            throw new ConflictException('Pedido já existe.');
        }

        return await this.orderRepository.save(mappedOrder);
    }

    async findAll(): Promise<Order[]> {
        return await this.orderRepository.find({
            relations: ['items'],
            order: { id: 'DESC' },
        });
    }

    async findOne(orderId: string): Promise<Order> {
        const order = await this.orderRepository.findOne({
            where: { orderId },
            relations: ['items'],
        });

        if (!order) {
            throw new NotFoundException('Pedido não encontrado.');
        }

        return order;
    }

    async update(orderId: string, updateOrderDto: CreateOrderDto): Promise<Order> {
        const existingOrder = await this.orderRepository.findOne({
            where: { orderId },
            relations: ['items'],
        });

        if (!existingOrder) {
            throw new NotFoundException('Pedido não encontrado.');
        }

        await this.itemRepository.delete({
            order: { id: existingOrder.id },
        });

        const mappedOrder = OrderMapper.toEntity(updateOrderDto);
        existingOrder.value = mappedOrder.value;
        existingOrder.creationDate = mappedOrder.creationDate;
        existingOrder.items = mappedOrder.items;

        return await this.orderRepository.save(existingOrder);
    }

    async remove(orderId: string): Promise<{ message: string }> {
        const existingOrder = await this.orderRepository.findOne({
            where: { orderId },
            relations: ['items'],
        });

        if (!existingOrder) {
            throw new NotFoundException('Pedido não encontrado.');
        }

        await this.orderRepository.remove(existingOrder);

        return { message: 'Pedido removido com sucesso.' };
    }
}