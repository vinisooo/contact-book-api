import { Router } from "express";
import { clientLoginController, updateClientController, createClientController, getAllClientsController, retrieveClientController, deleteClientController } from "../controllers/client.controllers";
import validateDataMiddleware from "../middlewares/validateData.middleware";
import { clientLoginSerializer, clientReqSerializer, clientUpdateSerializer } from "../serializers/client.serializers";
import checkClientEmailExistsMiddleware from "../middlewares/checkClientEmailExists.middleware";
import ensureClientExistsMiddleware from "../middlewares/ensureClientExists.middleware";
import validateTokenMiddleware from "../middlewares/validateToken.middleware";
import isAccountOwnerMiddleware from "../middlewares/isAccountOwner.middleware";

const clientRoute: Router = Router();

clientRoute.get("/", getAllClientsController);
clientRoute.get("/:id", ensureClientExistsMiddleware, retrieveClientController);
clientRoute.patch("/:id", ensureClientExistsMiddleware, validateTokenMiddleware, isAccountOwnerMiddleware, validateDataMiddleware(clientUpdateSerializer), updateClientController);
clientRoute.delete("/:id", ensureClientExistsMiddleware, validateTokenMiddleware, isAccountOwnerMiddleware, deleteClientController);
clientRoute.post("/register", validateDataMiddleware(clientReqSerializer), checkClientEmailExistsMiddleware, createClientController);
clientRoute.post("/login", validateDataMiddleware(clientLoginSerializer), clientLoginController);


export default clientRoute;