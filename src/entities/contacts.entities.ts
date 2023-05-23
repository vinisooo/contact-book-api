import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne } from "typeorm";
import { Client } from "./clients.entities";

@Entity("contacts")
export class Contact{
    @PrimaryGeneratedColumn()
    id: number
    
    @Column({type: "varchar", length: 256, nullable: false})
    name: string

    @Column({type: "varchar", length: 256, nullable: false})
    email: string

    @Column({type: "varchar", length: 20, nullable: false})
    phone: string

    @CreateDateColumn({type: "date"})
    createdAt: string

    @ManyToOne(()=>Client, (client)=> client.contacts)
    client: Client

}
