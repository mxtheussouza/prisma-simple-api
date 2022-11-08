import { prisma } from "@/database";
import { UserImplementation } from "@/repositories/implementations/user.implementation";
import { UpdateUsersService } from "./update-users";
import { UpdateUsersController } from "./update-users.controller";

const usersRepository = new UserImplementation(prisma);
const updateUsersService = new UpdateUsersService(usersRepository);
const updateUsersController = new UpdateUsersController(updateUsersService);

export { updateUsersController };
