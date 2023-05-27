import { Request, Response, NextFunction } from "express" 
import { AppDataSource } from "../data-source";
import { User } from "../entities/users.entities";
import { AppError } from "../error";
import { noPasswordUserSerializer } from "../serializers/user.serializers";

const ensureUserExistsMiddleware = async(req: Request, res: Response, next: NextFunction) => {
    const userRepository = AppDataSource.getRepository(User);
    const userId = Number(req.params.id);

    if (!userId){
        throw new AppError("User ID must be a number", 400);
    }

    const user = await userRepository.findOne({
        where:{
            id: userId
        },
        relations:{
            contacts: true
        }
    });

    if(!user){
        throw new AppError("User Not Found", 404);
    }
    req.userById = user;
    
    return next();
}

export default ensureUserExistsMiddleware
