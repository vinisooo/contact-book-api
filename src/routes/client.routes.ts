import { Router } from "express";

import { clientLoginController, updateClientController, createClientController, getAllClientsController, retrieveClientController, deleteClientController } from "../controllers/client.controllers";
import { clientLoginSerializer, clientReqSerializer, clientUpdateSerializer } from "../serializers/client.serializers";
import validateDataMiddleware from "../middlewares/validateData.middleware";
import checkClientEmailExistsMiddleware from "../middlewares/checkClientEmailExists.middleware";
import ensureClientExistsMiddleware from "../middlewares/ensureClientExists.middleware";
import validateTokenMiddleware from "../middlewares/validateToken.middleware";
import isAccountOwnerMiddleware from "../middlewares/isAccountOwner.middleware";

import { contactReqSerializer } from "../serializers/contact.serializers";
import { createContactController, getClientContactsController } from "../controllers/contact.controllers";

const clientRouter: Router = Router();


clientRouter.get("/", getAllClientsController);
clientRouter.get("/:id", ensureClientExistsMiddleware, retrieveClientController);
clientRouter.patch("/:id", ensureClientExistsMiddleware, validateTokenMiddleware, isAccountOwnerMiddleware, validateDataMiddleware(clientUpdateSerializer), updateClientController);
clientRouter.delete("/:id", ensureClientExistsMiddleware, validateTokenMiddleware, isAccountOwnerMiddleware, deleteClientController);
clientRouter.post("/register", validateDataMiddleware(clientReqSerializer), checkClientEmailExistsMiddleware, createClientController);
clientRouter.post("/login", validateDataMiddleware(clientLoginSerializer), clientLoginController);

clientRouter.get("/:id/contacts", ensureClientExistsMiddleware, validateTokenMiddleware, isAccountOwnerMiddleware, getClientContactsController);
clientRouter.post("/:id/contacts", validateDataMiddleware(contactReqSerializer), ensureClientExistsMiddleware, validateTokenMiddleware, isAccountOwnerMiddleware, createContactController);

export default clientRouter;