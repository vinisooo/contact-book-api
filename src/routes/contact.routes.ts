import { Router } from "express";
import ensureContactExistsMiddleware from "../middlewares/ensureContactExists.middleware";
import validateTokenMiddleware from "../middlewares/validateToken.middleware";
import hasContactMiddleware from "../middlewares/hasContact.middleware";
import { deleteContactController, retrieveContactController, updateContactController } from "../controllers/contact.controllers";
import validateDataMiddleware from "../middlewares/validateData.middleware";
import { contactUpdateSerializer } from "../serializers/contact.serializers";

const contactRouter: Router = Router();

contactRouter.get("/:id", ensureContactExistsMiddleware, validateTokenMiddleware, hasContactMiddleware, retrieveContactController);
contactRouter.patch("/:id", validateDataMiddleware(contactUpdateSerializer), ensureContactExistsMiddleware, validateTokenMiddleware, hasContactMiddleware, updateContactController);
contactRouter.delete("/:id", ensureContactExistsMiddleware, validateTokenMiddleware, hasContactMiddleware, deleteContactController);

export default contactRouter;