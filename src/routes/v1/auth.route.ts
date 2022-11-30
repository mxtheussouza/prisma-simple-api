import { Router } from "express";
import { RouteBuilder } from "@/builders/route.builder";

import { loginController } from "@/usecases/auth/login";

const authRoutes = Router();

RouteBuilder.router(authRoutes)
  .method("post")
  .path("/login")
  .controller(loginController)
  .build();

export { authRoutes };
