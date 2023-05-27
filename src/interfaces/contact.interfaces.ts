import { z } from "zod";
import { userReqSerializer } from "../serializers/user.serializers";

type iContactReq = z.infer<typeof userReqSerializer>

export { iContactReq };