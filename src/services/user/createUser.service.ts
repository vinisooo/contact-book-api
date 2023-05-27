import { Request, Response } from "express";
import { AppDataSource } from "../../data-source";
import { iUserReq, iNoPasswordUser } from "../../interfaces/user.interfaces";
import { User } from "../../entities/users.entities";
import { noPasswordUserSerializer } from "../../serializers/user.serializers";
import { Repository } from "typeorm";

const createUserService = async(data: iUserReq) => {
    const userRepository:Repository<User> = AppDataSource.getRepository(User);

    const user = userRepository.create(data);
    await userRepository.save(user);

    return user;
}

export default createUserService