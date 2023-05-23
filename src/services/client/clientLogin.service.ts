import { Repository } from "typeorm"
import { Client } from "../../entities/clients.entities"
import { AppDataSource } from "../../data-source"
import { iClientLogin } from "../../interfaces/client.interfaces";
import { AppError } from "../../error";
import { compare } from "bcryptjs";
import jwt from "jsonwebtoken";

const clientLoginService = async(data: iClientLogin) => {
    const clientRepository: Repository<Client> = AppDataSource.getRepository(Client);

    const foundByEmail = await clientRepository.findOneBy({email: data.email})
    
    if(!foundByEmail){
        throw new AppError("Invalid email or password", 403);
    }

    const rightPassword: boolean = await compare(data.password, foundByEmail.password);

    if(!rightPassword){
        throw new AppError("Invalid email or password", 403);
    }

    const token: string = jwt.sign({
        email: foundByEmail.email
    },
        process.env.SECRET_KEY!
    ,
    {
        expiresIn: process.env.EXPIRES_IN,
        subject: foundByEmail.id.toString()
    })

    return token;
}

export default clientLoginService