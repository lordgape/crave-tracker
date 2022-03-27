import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Task {
    @PrimaryColumn()
    id: string
    
    @Column()
    title:string

    @Column()
    isCompleted: boolean
}