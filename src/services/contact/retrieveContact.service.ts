import { AppDataSource } from "../../data-source"
import { Contact } from "../../entities/contacts.entities"


const retrieveContactService = (contactId: number) => {
    const contactRepository = AppDataSource.getRepository(Contact);

    const contact = contactRepository.findOneBy({id: contactId});

}