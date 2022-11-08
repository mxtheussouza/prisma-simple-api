import { prisma } from "@/database";
import { UserImplementation } from "@/repositories/implementations/user.implementation";
import { FindAllUsersService } from "./find-all-users";
import { FindAllUsersController } from "./find-all-users.controller";

const usersRepository = new UserImplementation(prisma);
const findAllUsersService = new FindAllUsersService(usersRepository);
const findAllUsersController = new FindAllUsersController(findAllUsersService);

export { findAllUsersController };
