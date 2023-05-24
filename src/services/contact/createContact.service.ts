import { AppDataSource } from "../../data-source";
import { iContactReq } from "../../interfaces/contact.interfaces";
import { Contact } from "../../entities/contacts.entities";
import { Client } from "../../entities/clients.entities";
import { Repository } from "typeorm";
import { noPasswordNoContactsClientSerializer } from "../../serializers/client.serializers";
import { AppError } from "../../error";

const createContactService = async(payload: iContactReq, clientId: number) => {
    const contactRepository: Repository<Contact> = AppDataSource.getRepository(Contact);
    const clientRepository: Repository<Client> = AppDataSource.getRepository(Client);

    const client = await clientRepository.findOneBy({id: clientId});
    
    if(!client){
        throw new AppError("client not found", 404);
    }

    const contact = contactRepository.create({...payload, client: client});

    await contactRepository.save(contact);

    const serializedClient = noPasswordNoContactsClientSerializer.parse(contact.client);
    const serializedContact = {...contact, client: serializedClient}

    return serializedContact;
}

export default createContactService;