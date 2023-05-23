import { Request, Response } from "express";
import { AppDataSource } from "../../data-source";
import { iClientReq } from "../../interfaces/client.interfaces";
import { Client } from "../../entities/clients.entities";

const createClientService = async(data: iClientReq) => {
    const clientRepository = AppDataSource.getRepository(Client);

    const client = clientRepository.create(data);

    clientRepository.save(client);

    return client;
}

export default createClientService