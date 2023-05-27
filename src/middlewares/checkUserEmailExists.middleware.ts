import { Request, Response, NextFunction } from "express";
import { AppDataSource } from "../data-source";
import { User } from "../entities/users.entities";
import { AppError } from "../error";

const checkUserEmailExistsMiddleware = async(req: Request, res: Response, next: NextFunction) => {

    const userRepository = AppDataSource.getRepository(User);
    const payload = req.body;

    const emailExists = await userRepository.exist({
        where:{email: payload.email}
    });

    if(emailExists){
        throw new AppError("Email already exists", 409);
    }

    return next();
}

export default checkUserEmailExistsMiddleware