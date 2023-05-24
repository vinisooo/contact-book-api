import { Repository } from "typeorm";
import { Contact } from "../../entities/contacts.entities";
import { AppDataSource } from "../../data-source";

const updateContactService = async(payload: object, oldData: Contact) => {
    const contactRepository: Repository<Contact> = AppDataSource.getRepository(Contact);

    const updatedContact = contactRepository.create({...oldData, ...payload});

    await contactRepository.save(updatedContact);

    return updatedContact
}

export default updateContactService