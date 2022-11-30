import { prisma } from "@/database";
import { ControllerServerErrorDecorator } from "@/decorators/controller-server-error.decorator";
import { UserImplementation } from "@/repositories/implementations/user.implementation";
import { FindAuthUserService } from "./find-auth-user";
import { FindAuthUserController } from "./find-auth-user.controller";

const userRepository = new UserImplementation(prisma);
const findAuthUserService = new FindAuthUserService(userRepository);
const findAuthUserController = new ControllerServerErrorDecorator(
  new FindAuthUserController(findAuthUserService),
);

export { findAuthUserController };
