import z from "zod";
import { noClientContactSerializer } from "./contact.serializers";

const clientSerializer = z.object({
    id: z.number(),
    name: z.string().max(256),
    email: z.string().email().max(256),
    password: z.string().max(256),
    phone: z.string().max(20),
    createdAt: z.string(),
    contacts: z.array(noClientContactSerializer)
})

const clientReqSerializer = clientSerializer.omit({id: true, createdAt: true, contacts: true});
const noPasswordClientSerializer = clientSerializer.omit({password: true});
const noPasswordNoContactsClientSerializer = noPasswordClientSerializer.omit({contacts: true})

export {clientSerializer, clientReqSerializer, noPasswordClientSerializer, noPasswordNoContactsClientSerializer}