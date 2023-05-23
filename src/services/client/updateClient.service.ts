import { AppDataSource } from "../../data-source";
import { Client } from "../../entities/clients.entities";
import { iClientUpdate } from "../../interfaces/client.interfaces";
import { Repository } from "typeorm";

const updateClientService = async(payload: object, oldData: Client) => {
    const clientRepository: Repository<Client> = AppDataSource.getRepository(Client);

    const updatedClient = clientRepository.create({
        ...oldData,
        ...payload
    });

    await clientRepository.save(updatedClient);

    return updatedClient
}

export default updateClientService