import { AppDataSource } from "../../data-source";
import { iContactReq } from "../../interfaces/contact.interfaces";
import { Contact } from "../../entities/contacts.entities";
import { Client } from "../../entities/clients.entities";

const createContactService = async(payload: iContactReq, client: Client) => {
    const contactRepository = AppDataSource.getRepository(Contact);

    const contact = contactRepository.create({...payload, client: client});

    await contactRepository.save(contact);

    return contact
}

export default createContactService;