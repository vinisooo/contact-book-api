import { Repository } from "typeorm"
import { User } from "../../entities/users.entities"
import { AppDataSource } from "../../data-source"
import { iUserLogin } from "../../interfaces/user.interfaces";
import { AppError } from "../../error";
import { compare } from "bcryptjs";
import jwt from "jsonwebtoken";

const userLoginService = async(data: iUserLogin) => {
    const userRepository: Repository<User> = AppDataSource.getRepository(User);

    const foundByEmail = await userRepository.findOneBy({email: data.email})
    
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
        process.env.SECRET_KEY || "secretkey"
    ,
    {
        expiresIn: process.env.EXPIRES_IN || "24h",
        subject: foundByEmail.id.toString()
    })

    return token;
}

export default userLoginService