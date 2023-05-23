import { Request, Response } from "express";
import createClientService from "../services/client/createClient.service";
import getAllClientsService from "../services/client/getAllClients.service";
import clientLoginService from "../services/client/clientLogin.service";
import updateClientService from "../services/client/updateClient.service";
import deleteClientService from "../services/client/deleteClient.service";

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

const clientLoginController = async(req: Request, res: Response): Promise<Response> => {
    const token:string = await clientLoginService(req.body);

    return res.status(201).json({
        "accessToken": token
    })
}

const updateClientController = async(req: Request, res: Response): Promise<Response> => {
    const updatedClient = await updateClientService(req.body, req.clientById);

    return res.status(200).json(updatedClient);
}

const deleteClientController = async (req: Request, res: Response): Promise<Response>=> {
    const deletedClient = await deleteClientService(Number(req.params.id));

    return res.status(204).json(deletedClient);
}

export { createClientController, retrieveClientController, getAllClientsController, clientLoginController, updateClientController, deleteClientController };
