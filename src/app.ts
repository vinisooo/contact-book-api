import "express-async-errors";
import express, { Application } from "express";
const cors = require('cors');

import { handleError } from "./error";
import userRouter from "./routes/user.routes";
import contactRouter from "./routes/contact.routes";

const app: Application = express();
app.use(express.json());
app.use(cors());

app.use("/users", userRouter);
app.use("/contacts", contactRouter);

app.use(handleError);

export default app