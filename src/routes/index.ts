import { Router } from "express";

import { authorize } from "@/middlewares/authorize";

import { authRoutes } from "./api/auth.route";
import { usersRoutes } from "./api/users.route";

const routes = Router();

routes.use("/", authRoutes);

routes.use(authorize);
routes.use("/users", usersRoutes);

export { routes };
