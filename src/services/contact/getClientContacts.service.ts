import { Repository } from "typeorm"
import { Contact } from "../../entities/contacts.entities"
import { AppDataSource } from "../../data-source"

const getClientContactsService = async(clientId: number) => {
    const contactRepository: Repository<Contact> = AppDataSource.getRepository(Contact);

    const contacts = await contactRepository.find({
        where: {
            client:{
                id: clientId
            }
        }
    })

    contactRepository.save(contacts);

    return contacts
}

export default getClientContactsService