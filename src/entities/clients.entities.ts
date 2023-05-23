import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, OneToMany, JoinTable } from "typeorm";
import { Contact } from "./contacts.entities";

@Entity("clients")
export class Client {
    @PrimaryGeneratedColumn()
    id: number

    @Column({type: "varchar", length: 256, nullable: false, unique: true})
    name: string

    @Column({type: "varchar", length: 256, nullable: false, unique: true})
    email: string

    @Column({type: "varchar", length: 256, nullable: false})
    password: string

    @Column({type: "varchar", length: 20, nullable: false})
    phone: string

    @CreateDateColumn({type: "varchar"})
    created_at: Date

    @OneToMany(()=> Contact, (contact) => contact.client)
    @JoinTable()
    contacts: Contact[]

}
