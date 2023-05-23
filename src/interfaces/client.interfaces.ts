import { z } from "zod";
import { clientSerializer, clientReqSerializer, noPasswordClientSerializer } from "../serializers/client.serializers";

type iClient = z.infer<typeof clientSerializer>;
type iClientReq = z.infer<typeof clientReqSerializer>;
type iNoPasswordClient = z.infer<typeof noPasswordClientSerializer>;

export { iClient, iClientReq, iNoPasswordClient };