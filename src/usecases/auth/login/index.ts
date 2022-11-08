import { prisma } from "@/database";
import { UserImplementation } from "@/repositories/implementations/user.implementation";
import { LoginService } from "./login";
import { LoginController } from "./login.controller";

const usersRepository = new UserImplementation(prisma);
const loginService = new LoginService(usersRepository);
const loginController = new LoginController(loginService);

export { loginController };
