import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne } from "typeorm";
import { User } from "./users.entities";

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

    @ManyToOne(()=>User, (user)=> user.contacts)
    user: User

}
