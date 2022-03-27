import { Column, Entity } from "typeorm"
import { PrimaryColumn } from "typeorm/decorator/columns/PrimaryColumn"

@Entity()
export class Milestone {
    @PrimaryColumn()
    id: string
    
    @Column()
    title: string
}