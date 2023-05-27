import { Request, Response } from "express";
import createContactService from "../services/contact/createContact.service";
import getUserContactsService from "../services/contact/getUserContacts.service";
import updateContactService from "../services/contact/updateContact.service";
import deleteContactService from "../services/contact/deleteContact.service";
import { noPasswordUserSerializer, noPasswordNoContactsUserSerializer } from "../serializers/user.serializers";

const createContactController = async(req: Request, res: Response): Promise<Response> => {
    const createdContact = await createContactService(req.body, req.loggedUserId);
    
    return res.status(201).json(createdContact);
}

const getUserContactsController = async(req: Request, res: Response): Promise<Response> => {
    const contacts = await getUserContactsService(Number(req.params.id));

    return res.status(200).json(contacts);
}

const updateContactController  = async(req: Request, res: Response): Promise<Response> =>{
    const updatedContact = await updateContactService(req.body, req.contactById);

    return res.status(201).json(updatedContact);
}

const deleteContactController = async(req: Request, res: Response): Promise<Response> => {
    const deletedContact = deleteContactService(Number(req.params.id));

    return res.status(204).json(deletedContact);
}

const retrieveContactController = async(req: Request, res: Response): Promise<Response> =>{
    const contact = req.contactById;
    const serializedUser = noPasswordNoContactsUserSerializer.parse(contact.user);
    const serializedContact = {...contact, user: serializedUser}
    
    return res.status(200).json(serializedContact);
}

const getLoggedUserController = async(req: Request, res: Response): Promise<Response> => {
    return res.status(200).json(req.userById);
}

export { createContactController, getUserContactsController, updateContactController, deleteContactController, retrieveContactController, getLoggedUserController }