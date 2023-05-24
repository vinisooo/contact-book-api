import { Contact } from "../../entities/contacts.entities";
import { iNoPasswordClient } from "../../interfaces/client.interfaces";

declare global{
    namespace Express {
        interface Request {
            clientById: Client,
            contactById: Contact,
            loggedClientId: number
        }
    }
}