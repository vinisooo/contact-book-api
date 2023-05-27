import { Request, Response ,NextFunction } from "express";
import { AppError } from "../error";

const isAccountOwnerMiddleware = (req: Request, res: Response, next: NextFunction) => {
    if(req.loggedUserId != req.userById.id){
        throw new AppError("You do not have permission to access this user", 401);
    }
    return next();
}

export default isAccountOwnerMiddleware