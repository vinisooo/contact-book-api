import { Contact } from "../../entities/contacts.entities";
import { iNoPasswordUser } from "../../interfaces/user.interfaces";

declare global{
    namespace Express {
        interface Request {
            userById: User,
            contactById: Contact,
            loggedUserId: number
        }
    }
}