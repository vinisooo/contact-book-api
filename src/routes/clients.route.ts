import { Router } from "express";
import { clientLoginController, createClientController, getAllClientsController, retrieveClientController } from "../controllers/client.controllers";
import validateDataMiddleware from "../middlewares/validateData.middleware";
import { clientLoginSerializer, clientReqSerializer } from "../serializers/client.serializers";
import checkClientEmailExistsMiddleware from "../middlewares/checkClientEmailExists.middleware";
import ensureClientExistsMiddleware from "../middlewares/ensureClientExists.middleware";

const clientRoute: Router = Router();

clientRoute.get("/", getAllClientsController);
clientRoute.get("/:id", ensureClientExistsMiddleware, retrieveClientController);
clientRoute.post("/register", validateDataMiddleware(clientReqSerializer), checkClientEmailExistsMiddleware, createClientController);
clientRoute.post("/login", validateDataMiddleware(clientLoginSerializer), clientLoginController);


export default clientRoute;