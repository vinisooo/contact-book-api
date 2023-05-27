import "express-async-errors";
import express, { Application } from "express";

import { handleError } from "./error";
import userRouter from "./routes/user.routes";
import contactRouter from "./routes/contact.routes";

const app: Application = express();
app.use(express.json());

app.use("/users", userRouter);
app.use("/contacts", contactRouter);

app.use(handleError);

export default app