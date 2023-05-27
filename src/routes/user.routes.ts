import { Router } from "express";

import { userLoginController, updateUserController, createUserController, getAllUsersController, retrieveUserController, deleteUserController } from "../controllers/user.controllers";
import { userLoginSerializer, userReqSerializer, userUpdateSerializer } from "../serializers/user.serializers";
import validateDataMiddleware from "../middlewares/validateData.middleware";
import checkUserEmailExistsMiddleware from "../middlewares/checkUserEmailExists.middleware";
import ensureUserExistsMiddleware from "../middlewares/ensureUserExists.middleware";
import validateTokenMiddleware from "../middlewares/validateToken.middleware";
import isAccountOwnerMiddleware from "../middlewares/isAccountOwner.middleware";

import { contactReqSerializer } from "../serializers/contact.serializers";
import { createContactController, getUserContactsController } from "../controllers/contact.controllers";

const userRouter: Router = Router();


userRouter.get("/", getAllUsersController);
userRouter.get("/:id", ensureUserExistsMiddleware, retrieveUserController);
userRouter.patch("/:id", ensureUserExistsMiddleware, validateTokenMiddleware, isAccountOwnerMiddleware, validateDataMiddleware(userUpdateSerializer), updateUserController);
userRouter.delete("/:id", ensureUserExistsMiddleware, validateTokenMiddleware, isAccountOwnerMiddleware, deleteUserController);
userRouter.post("/register", validateDataMiddleware(userReqSerializer), checkUserEmailExistsMiddleware, createUserController);
userRouter.post("/login", validateDataMiddleware(userLoginSerializer), userLoginController);


userRouter.get("/:id/contacts", ensureUserExistsMiddleware, validateTokenMiddleware, isAccountOwnerMiddleware, getUserContactsController);

export default userRouter;