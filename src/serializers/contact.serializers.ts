import { z } from "zod";
import { clientSerializer } from "./client.serializers";

const contactSerializer: z.ZodObject<any> = z.object({
    id: z.number(),
    name: z.string().max(256),
    email: z.string().email().max(256),
    phone: z.string().max(20),
    createdAt: z.string(),
    client: clientSerializer
})

const noClientContactSerializer = contactSerializer.omit({client: true});
const contactReqSerializer = noClientContactSerializer.omit({id: true, createdAt: true});

export { contactSerializer, noClientContactSerializer, contactReqSerializer };
