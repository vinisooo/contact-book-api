import { AppDataSource } from "../../data-source";
import { Client } from "../../entities/clients.entities";
import { Repository } from "typeorm";

const deleteClientService = async(clientId: number) => {
    const clientRepository: Repository<Client> = AppDataSource.getRepository(Client);

    const deletedClient = clientRepository.delete(clientId);

    return deletedClient
}

export default deleteClientService