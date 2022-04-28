import { Entity, BaseEntity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from "typeorm";

@Entity('pokemon')
export class Pokemon extends BaseEntity{

    @PrimaryGeneratedColumn({ type: 'bigint' })
    id: number

    @Column({
        unique: true
    })
    name: string;

    @Column({
        type: "numeric"
    })
    price: number

    @Column()
    warehouse: string;

    @Column()
    author: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn()
    deleteAt: Date;

}
