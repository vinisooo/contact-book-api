import z from "zod";
import { phoneRegex } from "./contact.serializers";
import { noUserContactSerializer } from "./contact.serializers";

const userSerializer = z.object({
    id: z.number(),
    name: z.string().max(256),
    email: z.string().email().max(256),
    password: z.string().max(256),
    phone: z.string().max(20).regex(phoneRegex, "Invalid phone number, must be like: +00 00 000000000"),
    createdAt: z.string(),
    contacts: z.array(noUserContactSerializer)
})

const userReqSerializer = userSerializer.omit({id: true, createdAt: true, contacts: true});
const userLoginSerializer = userReqSerializer.omit({name: true, phone: true});
const userUpdateSerializer = userReqSerializer.partial();
const noPasswordUserSerializer = userSerializer.omit({password: true});
const noPasswordNoContactsUserSerializer = noPasswordUserSerializer.omit({contacts: true});

export {userSerializer, userReqSerializer, noPasswordUserSerializer,
    noPasswordNoContactsUserSerializer, userUpdateSerializer, userLoginSerializer}