import { z } from "zod";
import { noPasswordNoContactsUserSerializer } from "./user.serializers";

const phoneRegex = /^\+\d{2}\s\d{2}\s\d{9}$/;

const contactSerializer: z.ZodObject<any> = z.object({
    id: z.number(),
    name: z.string().max(256),
    email: z.string().email().max(256),
    phone: z.string().max(20).regex(phoneRegex, "Invalid phone number, must be like: +00 00 000000000"),
    createdAt: z.string(),
    user: noPasswordNoContactsUserSerializer
})

const noUserContactSerializer = contactSerializer.omit({user: true});
const contactReqSerializer = noUserContactSerializer.omit({id: true, createdAt: true});
const contactUpdateSerializer = contactReqSerializer.partial();

export { phoneRegex, contactSerializer, noUserContactSerializer, contactReqSerializer, contactUpdateSerializer };
