import { prisma } from "@/database";
import { ControllerServerErrorDecorator } from "@/decorators/controller-server-error.decorator";
import { UserImplementation } from "@/repositories/implementations/user.implementation";
import { LoginService } from "./login";
import { LoginController } from "./login.controller";

const userRepository = new UserImplementation(prisma);
const loginService = new LoginService(userRepository);
const loginController = new ControllerServerErrorDecorator(
  new LoginController(loginService),
);

export { loginController };
