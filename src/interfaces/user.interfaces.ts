import { z } from "zod";
import { userSerializer, userReqSerializer, noPasswordUserSerializer, userLoginSerializer, userUpdateSerializer } from "../serializers/user.serializers";

type iUser = z.infer<typeof userSerializer>;
type iUserReq = z.infer<typeof userReqSerializer>;
type iNoPasswordUser = z.infer<typeof noPasswordUserSerializer>;
type iUserLogin = z.infer<typeof userLoginSerializer>;
type iUserUpdate = z.infer<typeof userUpdateSerializer>;

export { iUser, iUserReq, iNoPasswordUser, iUserLogin, iUserUpdate };