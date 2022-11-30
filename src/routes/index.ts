import { Router } from "express";

import { authorize } from "@/middlewares/authorize";

import { authRoutes } from "./v1/auth.route";
import { usersRoutes } from "./v1/users.route";

const routes = Router();

routes.use("/", authRoutes);

routes.use(authorize);
routes.use("/users", usersRoutes);

export { routes };
