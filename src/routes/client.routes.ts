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

const clientRoute: Router = Router();


clientRoute.get("/", getAllClientsController);
clientRoute.get("/:id", ensureClientExistsMiddleware, retrieveClientController);
clientRoute.patch("/:id", ensureClientExistsMiddleware, validateTokenMiddleware, isAccountOwnerMiddleware, validateDataMiddleware(clientUpdateSerializer), updateClientController);
clientRoute.delete("/:id", ensureClientExistsMiddleware, validateTokenMiddleware, isAccountOwnerMiddleware, deleteClientController);
clientRoute.post("/register", validateDataMiddleware(clientReqSerializer), checkClientEmailExistsMiddleware, createClientController);
clientRoute.post("/login", validateDataMiddleware(clientLoginSerializer), clientLoginController);

clientRoute.get("/:id/contacts", ensureClientExistsMiddleware, validateTokenMiddleware, isAccountOwnerMiddleware, getClientContactsController);
clientRoute.post("/:id/contacts", validateDataMiddleware(contactReqSerializer), ensureClientExistsMiddleware, validateTokenMiddleware, isAccountOwnerMiddleware, createContactController);

export default clientRoute;