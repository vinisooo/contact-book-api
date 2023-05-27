import { AppDataSource } from "../../data-source";
import { User } from "../../entities/users.entities";
import { iUserUpdate } from "../../interfaces/user.interfaces";
import { Repository } from "typeorm";

const updateUserService = async(payload: object, oldData: User) => {
    const userRepository: Repository<User> = AppDataSource.getRepository(User);

    const updatedUser = userRepository.create({
        ...oldData,
        ...payload
    });

    await userRepository.save(updatedUser);

    return updatedUser
}

export default updateUserService