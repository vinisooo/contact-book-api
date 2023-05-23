import { AppDataSource } from "../../data-source"
import { Client } from "../../entities/clients.entities"

const deleteClientService = async(clientId: number) => {
    const clientRepository = AppDataSource.getRepository(Client);

    const deletedUser = clientRepository.delete(clientId);

    return deletedUser
}

export default deleteClientService