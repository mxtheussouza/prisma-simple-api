import { prisma } from "@/database";
import { UserImplementation } from "@/repositories/implementations/user.implementation";
import { CreateUsersService } from "./create.users";
import { CreateUsersController } from "./create-users.controller";

const usersRepository = new UserImplementation(prisma);
const createUsersService = new CreateUsersService(usersRepository);
const createUsersController = new CreateUsersController(createUsersService);

export { createUsersController };
