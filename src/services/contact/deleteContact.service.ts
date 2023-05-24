import { AppDataSource } from "../../data-source"
import { Contact } from "../../entities/contacts.entities"

const deleteContactService = async(contactId: number) => {
    const contactRepository = AppDataSource.getRepository(Contact);

    const deletedContact= contactRepository.delete(contactId);

    return deletedContact
}

export default deleteContactService