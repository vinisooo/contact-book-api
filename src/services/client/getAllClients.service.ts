import { AppDataSource } from "../../data-source";
import { Client } from "../../entities/clients.entities";
import { noPasswordNoContactsClientSerializer } from "../../serializers/client.serializers";

const getAllClientsService = async () => {
    const clientRepository = AppDataSource.getRepository(Client);

    const clients = await clientRepository.find();

    const noPasswordClients = clients.map(client =>noPasswordNoContactsClientSerializer.parse(client));

    return noPasswordClients;
}

export default getAllClientsService;