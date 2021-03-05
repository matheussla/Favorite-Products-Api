import {
  Entity, Column, PrimaryGeneratedColumn, CreateDateColumn,
  UpdateDateColumn, ManyToOne, JoinColumn,
} from 'typeorm';

import {
  IsNotEmpty,
} from 'class-validator';
import Client from './client';

@Entity('favoriteProducts')
class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  @IsNotEmpty({ message: 'The productId is required' })
  productId: string

  @Column()
  @ManyToOne(() => Client, (client) => client.id)
  @JoinColumn({ name: 'clientId' })
  @IsNotEmpty({ message: 'The clientId is required' })
  clientId: string

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updateAt: Date
}
export default Product;
