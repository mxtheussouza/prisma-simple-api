import { Router } from "express";
import { RouteBuilder } from "@/builders/route.builder";

import { findAllUsersController } from "@/usecases/users/find-all-users";
import { createUsersController } from "@/usecases/users/create-users";
import { updateUsersController } from "@/usecases/users/update-users";
import { deleteUsersController } from "@/usecases/users/delete-users";
import { findAuthUserController } from "@/usecases/users/find-auth-user";

const usersRoutes = Router();

RouteBuilder.router(usersRoutes)
  .method("get")
  .path("/")
  .controller(findAllUsersController)
  .build();
RouteBuilder.router(usersRoutes)
  .method("post")
  .path("/")
  .controller(createUsersController)
  .build();
RouteBuilder.router(usersRoutes)
  .method("put")
  .path("/:id")
  .controller(updateUsersController)
  .build();
RouteBuilder.router(usersRoutes)
  .method("delete")
  .path("/:id")
  .controller(deleteUsersController)
  .build();
RouteBuilder.router(usersRoutes)
  .method("get")
  .path("/me")
  .controller(findAuthUserController)
  .build();

export { usersRoutes };
