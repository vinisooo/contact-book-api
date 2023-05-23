import { Router } from "express";
import { createClientController, getAllClientsController, retrieveClientController } from "../controllers/client.controllers";
import validateDataMiddleware from "../middlewares/validateData.middleware";
import { clientReqSerializer } from "../serializers/client.serializers";
import checkClientEmailExistsMiddleware from "../middlewares/checkClientEmailExists.middleware";
import ensureClientExistsMiddleware from "../middlewares/ensureClientExists.middleware";

const clientRoute: Router = Router();

clientRoute.get("/", getAllClientsController);
clientRoute.get("/:id", ensureClientExistsMiddleware, retrieveClientController);
clientRoute.post("/register", validateDataMiddleware(clientReqSerializer), checkClientEmailExistsMiddleware, createClientController);


export default clientRoute;