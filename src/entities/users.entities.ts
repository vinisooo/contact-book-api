import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, OneToMany, JoinTable, BeforeInsert, BeforeUpdate } from "typeorm";
import { Contact } from "./contacts.entities";
import { hashSync } from "bcryptjs";

@Entity("users")
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column({type: "varchar", length: 256, nullable: false})
    name: string

    @Column({type: "varchar", length: 256, nullable: false, unique: true})
    email: string

    @Column({type: "varchar", length: 256, nullable: false})
    password: string

    @Column({type: "varchar", length: 20, nullable: false})
    phone: string

    @CreateDateColumn({type: "date"})
    createdAt: string

    @OneToMany(()=> Contact, (contact) => contact.user, {cascade: true})
    @JoinTable()
    contacts: Contact[]

    @BeforeInsert()
    @BeforeUpdate()
    encryptInsert()
    {
        this.password = hashSync(this.password, 10)
    }

}
