import { Router } from "express";

import { loginController } from "@/usecases/auth/login";

const authRoutes = Router();

authRoutes.post("/login", (request, response) =>
  loginController.handle(request, response),
);

export { authRoutes };
