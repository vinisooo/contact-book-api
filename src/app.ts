import "express-async-errors";
import express, { Application } from "express";
import { handleError } from "./error";
import clientRoute from "./routes/clients.route";

const app: Application = express();
app.use(express.json());

app.use("/clients", clientRoute);

app.use(handleError);

export default app