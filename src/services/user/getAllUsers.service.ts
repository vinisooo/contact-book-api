import { AppDataSource } from "../../data-source";
import { User } from "../../entities/users.entities";
import { noPasswordNoContactsUserSerializer } from "../../serializers/user.serializers";

const getAllUsersService = async () => {
    const userRepository = AppDataSource.getRepository(User);

    const users = await userRepository.find();

    const noPasswordUsers = users.map(user =>noPasswordNoContactsUserSerializer.parse(user));

    return noPasswordUsers;
}

export default getAllUsersService;