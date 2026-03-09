import { CreateOrderDto } from '../dto/create-order.dto';
import { Order } from '../entities/order.entity/order.entity';
import { Item } from '../entities/item.entity/item.entity';

export class OrderMapper {
    static toEntity(dto: CreateOrderDto): Order {
        const order = new Order();

        order.orderId = dto.numeroPedido.replace(/-\d+$/, '');
        order.value = dto.valorTotal;
        order.creationDate = new Date(dto.dataCriacao);

        order.items = dto.items.map((itemDto) => {
            const item = new Item();
            item.productId = Number(itemDto.idItem);
            item.quantity = itemDto.quantidadeItem;
            item.price = itemDto.valorItem;
            return item;
        });

        return order;
    }
}