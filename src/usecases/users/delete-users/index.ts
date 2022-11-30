import { prisma } from "@/database";
import { ControllerServerErrorDecorator } from "@/decorators/controller-server-error.decorator";
import { UserImplementation } from "@/repositories/implementations/user.implementation";
import { DeleteUsersService } from "./delete-users";
import { DeleteUsersController } from "./delete-users.controller";

const userRepository = new UserImplementation(prisma);
const deleteUsersService = new DeleteUsersService(userRepository);
const deleteUsersController = new ControllerServerErrorDecorator(
  new DeleteUsersController(deleteUsersService),
);

export { deleteUsersController };
