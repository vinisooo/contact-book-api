import { Request, Response, NextFunction } from "express"
import { AppError } from "../error";
import jwt from "jsonwebtoken";

const validateTokenMiddleware = (req: Request, res: Response, next: NextFunction) => {
    let token:string | undefined = req.headers.authorization; 

    if(!token){
        throw new AppError("Authorization token is required", 401);
    }

    token = token?.split(" ")[1];


    jwt.verify(token, process.env.SECRET_KEY || "secretkey", (err:unknown, decoded: any)=>{
        if(err){
            throw new AppError("Invalid authorization token", 401);
        }
        req.loggedUserId = parseInt(decoded.sub);
        return next(); 
    })
    
}

export default validateTokenMiddleware