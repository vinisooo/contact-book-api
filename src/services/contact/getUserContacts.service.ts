import { Repository } from "typeorm"
import { Contact } from "../../entities/contacts.entities"
import { AppDataSource } from "../../data-source"

const getUserContactsService = async(userId: number) => {
    const contactRepository: Repository<Contact> = AppDataSource.getRepository(Contact);

    const contacts = await contactRepository.find({
        where: {
            user:{
                id: userId
            }
        }
    })

    contactRepository.save(contacts);

    return contacts
}

export default getUserContactsService