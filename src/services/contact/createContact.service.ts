import { AppDataSource } from "../../data-source";
import { iContactReq } from "../../interfaces/contact.interfaces";
import { Contact } from "../../entities/contacts.entities";
import { Client } from "../../entities/clients.entities";
import { Repository } from "typeorm";
import { noPasswordNoContactsClientSerializer } from "../../serializers/client.serializers";

const createContactService = async(payload: iContactReq, client: Client) => {
    const contactRepository: Repository<Contact> = AppDataSource.getRepository(Contact);
    
    const contact = contactRepository.create({...payload, client: client});

    await contactRepository.save(contact);

    const serializedClient = noPasswordNoContactsClientSerializer.parse(contact.client);
    const serializedContact = {...contact, client: serializedClient}

    return serializedContact;
}

export default createContactService;