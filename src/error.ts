import { Request, Response, NextFunction } from "express";
import { ZodError } from "zod";

class AppError extends Error {
    message: string
    statusCode: number;
    constructor(message: string, statusCode: number){
        super();
        this.message = message;
        this.statusCode = statusCode;
    }
}

const handleError = (err: Error, req: Request, res: Response, _:NextFunction) => {

    if(err instanceof AppError) {
        return res.status(err.statusCode).json({
            detail: err.message
        })
    }
    if(err instanceof ZodError){
        return res.status(400).json({
            detail: err.flatten().fieldErrors
        })
    }

    return res.status(500).json({
        detail: "Internal Server Error"
    });

}

export {AppError, handleError}
