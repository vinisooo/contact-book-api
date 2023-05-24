import { Request, Response } from "express";
import createContactService from "../services/contact/createContact.service";

const createContactController = async(req: Request, res: Response): Promise<Response> => {
    const createdContact = await createContactService(req.body, req.clientById);
    
    return res.status(201).json(createdContact);
}



export { createContactController }