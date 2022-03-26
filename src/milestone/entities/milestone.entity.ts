import { Column } from "typeorm"
import { PrimaryColumn } from "typeorm/decorator/columns/PrimaryColumn"

export class Milestone {
    @PrimaryColumn()
    id: string
    
    @Column()
    title: string
}