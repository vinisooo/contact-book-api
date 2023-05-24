import { Request, Response ,NextFunction } from "express";
import { AppError } from "../error";

const isAccountOwnerMiddleware = (req: Request, res: Response, next: NextFunction) => {
    if(req.loggedClientId != req.clientById.id){
        throw new AppError("You do not have permission to access this client", 401);
    }
    return next();
}

export default isAccountOwnerMiddleware