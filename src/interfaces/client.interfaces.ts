import { z } from "zod";
import { clientReqSerializer } from "../serializers/client.serializers";

type iClientReq = z.infer<typeof clientReqSerializer>;

export { iClientReq };