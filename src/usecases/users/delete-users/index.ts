import { prisma } from "@/database";
import { UserImplementation } from "@/repositories/implementations/user.implementation";
import { DeleteUsersService } from "./delete-users";
import { DeleteUsersController } from "./delete-users.controller";

const usersRepository = new UserImplementation(prisma);
const deleteUsersService = new DeleteUsersService(usersRepository);
const deleteUsersController = new DeleteUsersController(deleteUsersService);

export { deleteUsersController };
