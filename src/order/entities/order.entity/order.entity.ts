import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Item } from '../item.entity/item.entity';
@Entity()
export class Order {

    @PrimaryGeneratedColumn()
    id: number;
    
    // Identificador único do pedido
    @Column({ unique: true })
    orderId: string;

    @Column()
    value: number;

    @Column()
    creationDate: Date;

    @OneToMany(() => Item, item => item.order, { cascade: true })
    items: Item[];
}