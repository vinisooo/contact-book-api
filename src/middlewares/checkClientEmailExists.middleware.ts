import { Request, Response, NextFunction } from "express";
import { AppDataSource } from "../data-source";
import { Client } from "../entities/clients.entities";
import { AppError } from "../error";

const checkClientEmailExistsMiddleware = async(req: Request, res: Response, next: NextFunction) => {

    const clientRepository = AppDataSource.getRepository(Client);
    const payload = req.body;

    const emailExists = await clientRepository.exist({
        where:{email: payload.email}
    });

    if(emailExists){
        throw new AppError("Email already exists", 409);
    }

    return next();
}

export default checkClientEmailExistsMiddleware