import { z } from "zod";
import { clientSerializer } from "./clients.serializer";

const contactSerializer: z.ZodObject<any> = z.object({
    id: z.number(),
    name: z.string().max(256),
    email: z.string().email().max(256),
    phone: z.string().max(20),
    createdAt: z.string(),
    client: clientSerializer
})

const noClientContactSerializer = contactSerializer.omit({client: true});

export { contactSerializer, noClientContactSerializer };
