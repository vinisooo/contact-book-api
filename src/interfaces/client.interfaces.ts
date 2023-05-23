import { z } from "zod";
import { clientSerializer, clientReqSerializer, noPasswordClientSerializer, clientLoginSerializer } from "../serializers/client.serializers";

type iClient = z.infer<typeof clientSerializer>;
type iClientReq = z.infer<typeof clientReqSerializer>;
type iNoPasswordClient = z.infer<typeof noPasswordClientSerializer>;
type iClientLogin = z.infer<typeof clientLoginSerializer>;

export { iClient, iClientReq, iNoPasswordClient, iClientLogin };