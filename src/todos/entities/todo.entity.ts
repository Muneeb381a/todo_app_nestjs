import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Tofo {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;


    @Column()
    description: string;

    @Column({ default: false})
    completed: boolean;
}