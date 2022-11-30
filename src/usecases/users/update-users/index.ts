import { prisma } from "@/database";
import { ControllerServerErrorDecorator } from "@/decorators/controller-server-error.decorator";
import { UserImplementation } from "@/repositories/implementations/user.implementation";
import { UpdateUsersService } from "./update-users";
import { UpdateUsersController } from "./update-users.controller";

const userRepository = new UserImplementation(prisma);
const updateUsersService = new UpdateUsersService(userRepository);
const updateUsersController = new ControllerServerErrorDecorator(
  new UpdateUsersController(updateUsersService),
);

export { updateUsersController };
