import { z } from "zod";
import { clientReqSerializer } from "../serializers/client.serializers";

type iContactReq = z.infer<typeof clientReqSerializer>

export { iContactReq };