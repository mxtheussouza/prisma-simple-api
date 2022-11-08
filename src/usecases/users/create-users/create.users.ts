import { hash } from "bcryptjs";
import { UserRepository } from "@/repositories/user.repository";
import { User } from "@/entities/user";
import { CreateUserDTO } from "./create-user.dto";

export class CreateUsersService {
  constructor(private readonly _usersRepository: UserRepository) {}

  async execute(data: CreateUserDTO): Promise<void> {
    const userExists = await this._usersRepository.findByEmail(data.email);

    if (userExists) throw new Error("Usuário já existe!");

    data.password = await hash(data.password, 12);

    const user = new User(data);

    await this._usersRepository.save(user);
  }
}
