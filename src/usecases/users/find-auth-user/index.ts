import { prisma } from "@/database";
import { UserImplementation } from "@/repositories/implementations/user.implementation";
import { FindAuthUserService } from "./find-auth-user";
import { FindAuthUserController } from "./find-auth-user.controller";

const usersRepository = new UserImplementation(prisma);
const findAuthUserService = new FindAuthUserService(usersRepository);
const findAuthUserController = new FindAuthUserController(findAuthUserService);

export { findAuthUserController };
