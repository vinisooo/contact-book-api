import { Request, Response } from "express";
import createClientService from "../services/client/createClient.service";

const createClientController = async(req: Request, res: Response):Promise<Response> => {
    const client = await createClientService(req.body);

    return res.status(201).json(client);
}

const retrieveClientController = async(req: Request, res: Response): Promise<Response> => {
    const client = req.clientById;
    
    return res.status(200).json(client);
}

export { createClientController, retrieveClientController };
