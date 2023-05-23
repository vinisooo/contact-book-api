import { Request, Response } from "express";
import createClientService from "../services/client/createClient.service";
import getAllClientsService from "../services/client/getAllClients.service";

const createClientController = async(req: Request, res: Response):Promise<Response> => {
    const client = await createClientService(req.body);

    return res.status(201).json(client);
}

const retrieveClientController = async(req: Request, res: Response): Promise<Response> => {
    const client = req.clientById;
    
    return res.status(200).json(client);
}

const getAllClientsController = async(req: Request, res: Response): Promise<Response> => {
    const clients = await getAllClientsService();
    
    return res.status(200).json(clients);
}

export { createClientController, retrieveClientController, getAllClientsController };
