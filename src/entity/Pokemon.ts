import { Entity,
    BaseEntity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    DeleteDateColumn } from "typeorm";
@Entity('pokemon')
export class Pokemon extends BaseEntity{
    @PrimaryGeneratedColumn({ type: 'bigint' })
    id: number

    @Column({
        type: "varchar",
        unique: true
    })
    name: string;

    @Column({
        type: "numeric"
    })
    price: number

    @Column({
        type: "varchar",
    })
    warehouse: string;

    @Column({
        type: "varchar",
    })
    author: string;

    @CreateDateColumn({
        type: "date"
    })
    createdAt: Date;

    @UpdateDateColumn({
        type: "date"
    })
    updatedAt: Date;

    @DeleteDateColumn({
        type: "date"
    })
    deleteAt: Date;
}
