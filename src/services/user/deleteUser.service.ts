import { AppDataSource } from "../../data-source";
import { User } from "../../entities/users.entities";
import { Repository } from "typeorm";

const deleteUserService = async(userId: number) => {
    const userRepository: Repository<User> = AppDataSource.getRepository(User);

    const deletedUser = userRepository.delete(userId);

    return deletedUser
}

export default deleteUserService