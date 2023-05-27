import { Request, Response, NextFunction } from "express";
import { AppError } from "../error";


const hasContactMiddleware = (req: Request, res: Response, next: NextFunction) => {
    if(req.loggedUserId != req.contactById.user.id){
        throw new AppError("You do not have permission to access this contact", 401);
    }

    return next();
}

export default hasContactMiddleware