import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Order } from '../order.entity/order.entity';
@Entity()
export class Item {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    productId: number;

    @Column()
    quantity: number;

    @Column()
    price: number;

    @ManyToOne(() => Order, order => order.items, { onDelete: 'CASCADE' })
    order: Order;
}