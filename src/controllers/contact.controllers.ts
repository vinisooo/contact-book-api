import { Request, Response } from "express";
import createContactService from "../services/contact/createContact.service";
import getClientContactsService from "../services/contact/getClientContacts.service";

const createContactController = async(req: Request, res: Response): Promise<Response> => {
    const createdContact = await createContactService(req.body, req.clientById);
    
    return res.status(201).json(createdContact);
}

const getClientContactsController = async(req: Request, res: Response): Promise<Response> => {
    const contacts = await getClientContactsService(Number(req.params.id));

    return res.status(200).json(contacts);
}

export { createContactController, getClientContactsController }