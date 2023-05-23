import { iNoPasswordClient } from "../../interfaces/client.interfaces";

declare global{
    namespace Express {
        interface Request {
            clientById: iNoPasswordClient
        }
    }
}