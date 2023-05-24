import { Router } from "express";
import ensureContactExistsMiddleware from "../middlewares/ensureContactExists.middleware";
import validateTokenMiddleware from "../middlewares/validateToken.middleware";
import hasContactMiddleware from "../middlewares/hasContact.middleware";
import { updateContactController } from "../controllers/contact.controllers";
import validateDataMiddleware from "../middlewares/validateData.middleware";
import { contactUpdateSerializer } from "../serializers/contact.serializers";

const contactRouter: Router = Router();

contactRouter.patch("/:id", validateDataMiddleware(contactUpdateSerializer), ensureContactExistsMiddleware, validateTokenMiddleware, hasContactMiddleware, updateContactController);

export default contactRouter;