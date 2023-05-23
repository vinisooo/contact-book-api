import { Router } from "express";
import app from "../app";

const clientRoute: Router = Router();

clientRoute.post("/register");

export default clientRoute;