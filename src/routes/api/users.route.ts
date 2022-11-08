import { Router } from "express";

import { findAllUsersController } from "@/usecases/users/find-all-users";
import { createUsersController } from "@/usecases/users/create-users";
import { updateUsersController } from "@/usecases/users/update-users";
import { deleteUsersController } from "@/usecases/users/delete-users";
import { findAuthUserController } from "@/usecases/users/find-auth-user";

const usersRoutes = Router();

usersRoutes.get("/", (request, response) =>
  findAllUsersController.handle(request, response),
);
usersRoutes.post("/", (request, response) =>
  createUsersController.handle(request, response),
);
usersRoutes.put("/:id", (request, response) =>
  updateUsersController.handle(request, response),
);
usersRoutes.delete("/:id", (request, response) =>
  deleteUsersController.handle(request, response),
);
usersRoutes.get("/me", (request, response) =>
  findAuthUserController.handle(request, response),
);

export { usersRoutes };
