import { Request, Response } from "express";
import { AppDataSource } from "../../data-source";
import { iClientReq, iNoPasswordClient } from "../../interfaces/client.interfaces";
import { Client } from "../../entities/clients.entities";
import { noPasswordClientSerializer } from "../../serializers/client.serializers";
import { Repository } from "typeorm";

const createClientService = async(data: iClientReq) => {
    const clientRepository:Repository<Client> = AppDataSource.getRepository(Client);

    const client = clientRepository.create(data);
    await clientRepository.save(client);

    return client;
}

export default createClientService