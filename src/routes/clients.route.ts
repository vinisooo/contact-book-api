import { Router } from "express";
import { createClientController } from "../controllers/client.controllers";
import validateDataMiddleware from "../middlewares/validateData.middleware";
import { clientReqSerializer } from "../serializers/client.serializers";
import checkClientEmailExistsMiddleware from "../middlewares/checkClientEmailExists.middleware";

const clientRoute: Router = Router();

clientRoute.post("/register", validateDataMiddleware(clientReqSerializer), checkClientEmailExistsMiddleware, createClientController);

export default clientRoute;