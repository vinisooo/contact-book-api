import { Request, Response, NextFunction } from "express" 
import { AppDataSource } from "../data-source";
import { Client } from "../entities/clients.entities";
import { AppError } from "../error";
import { noPasswordClientSerializer } from "../serializers/client.serializers";

const ensureClientExistsMiddleware = async(req: Request, res: Response, next: NextFunction) => {
    const clientRepository = AppDataSource.getRepository(Client);
    const clientId = Number(req.params.id);

    if (!clientId){
        throw new AppError("Client ID must be a number", 400);
    }

    const client = await clientRepository.findOne({
        where:{
            id: clientId
        },
        relations:{
            contacts: true
        }
    });

    if(!client){
        throw new AppError("Client ID Does not exist", 404);
    }
    req.clientById = client;
    
    return next();
}

export default ensureClientExistsMiddleware
