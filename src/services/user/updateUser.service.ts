import { AppDataSource } from "../../data-source";
import { User } from "../../entities/users.entities";
import { iUserUpdate } from "../../interfaces/user.interfaces";
import { Repository } from "typeorm";
import { noPasswordNoContactsUserSerializer } from "../../serializers/user.serializers";

const updateUserService = async(payload: object, oldData: User) => {
    const userRepository: Repository<User> = AppDataSource.getRepository(User);

    const updatedUser = userRepository.create({
        ...oldData,
        ...payload
    });

    await userRepository.save(updatedUser);

    const serializedUser = noPasswordNoContactsUserSerializer.parse(updatedUser);
    return serializedUser;
}

export default updateUserService