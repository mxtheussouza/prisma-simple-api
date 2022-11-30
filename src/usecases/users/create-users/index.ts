import { prisma } from "@/database";
import { ControllerServerErrorDecorator } from "@/decorators/controller-server-error.decorator";
import { UserImplementation } from "@/repositories/implementations/user.implementation";
import { CreateUsersService } from "./create.users";
import { CreateUsersController } from "./create-users.controller";

const userRepository = new UserImplementation(prisma);
const createUsersService = new CreateUsersService(userRepository);
const createUsersController = new ControllerServerErrorDecorator(
  new CreateUsersController(createUsersService),
);

export { createUsersController };
