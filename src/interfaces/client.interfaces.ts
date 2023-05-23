import { z } from "zod";
import { clientSerializer, clientReqSerializer, noPasswordClientSerializer, clientLoginSerializer, clientUpdateSerializer } from "../serializers/client.serializers";

type iClient = z.infer<typeof clientSerializer>;
type iClientReq = z.infer<typeof clientReqSerializer>;
type iNoPasswordClient = z.infer<typeof noPasswordClientSerializer>;
type iClientLogin = z.infer<typeof clientLoginSerializer>;
type iClientUpdate = z.infer<typeof clientUpdateSerializer>;

export { iClient, iClientReq, iNoPasswordClient, iClientLogin, iClientUpdate };