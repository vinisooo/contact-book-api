import { AppDataSource } from "../../data-source";
import { iContactReq } from "../../interfaces/contact.interfaces";
import { Contact } from "../../entities/contacts.entities";
import { User } from "../../entities/users.entities";
import { Repository } from "typeorm";
import { noPasswordNoContactsUserSerializer } from "../../serializers/user.serializers";
import { AppError } from "../../error";

const createContactService = async(payload: iContactReq, userId: number) => {
    const contactRepository: Repository<Contact> = AppDataSource.getRepository(Contact);
    const userRepository: Repository<User> = AppDataSource.getRepository(User);

    const user = await userRepository.findOneBy({id: userId});
    
    if(!user){
        throw new AppError("user not found", 404);
    }

    const contact = contactRepository.create({...payload, user: user});

    await contactRepository.save(contact);

    const serializedUser = noPasswordNoContactsUserSerializer.parse(contact.user);
    const serializedContact = {...contact, user: serializedUser}

    return serializedContact;
}

export default createContactService;