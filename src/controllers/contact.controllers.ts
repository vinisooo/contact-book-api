import { Request, Response } from "express";
import createContactService from "../services/contact/createContact.service";
import getClientContactsService from "../services/contact/getClientContacts.service";
import updateContactService from "../services/contact/updateContact.service";

const createContactController = async(req: Request, res: Response): Promise<Response> => {
    const createdContact = await createContactService(req.body, req.clientById);
    
    return res.status(201).json(createdContact);
}

const getClientContactsController = async(req: Request, res: Response): Promise<Response> => {
    const contacts = await getClientContactsService(Number(req.params.id));

    return res.status(200).json(contacts);
}

const updateContactController  = async(req: Request, res: Response): Promise<Response> =>{
    const updatedContact = await updateContactService(req.body, req.contactById);

    return res.status(201).json(updatedContact);
}

export { createContactController, getClientContactsController, updateContactController }