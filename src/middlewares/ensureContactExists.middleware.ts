import { Request, Response, NextFunction } from "express" 
import { AppDataSource } from "../data-source";
import { AppError } from "../error";
import { Repository } from "typeorm";
import { Contact } from "../entities/contacts.entities";
import { noPasswordClientSerializer } from "../serializers/client.serializers";

const ensureContactExistsMiddleware = async(req: Request, res: Response, next: NextFunction) => {
    const contactRepository: Repository<Contact> = AppDataSource.getRepository(Contact);
    const contactId = Number(req.params.id);

    if (!contactId){
        throw new AppError("Contact Not Found", 400);
    }

    const contact = await contactRepository.findOne({
        where:{
            id: contactId
        },
        relations:{
            client: true
        }
    });

    if(!contact){
        throw new AppError("Contact Not Found", 404);
    }

    req.contactById = contact;
    
    return next();
}

export default ensureContactExistsMiddleware
