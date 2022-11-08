import { hash } from "bcryptjs";
import { UserRepository } from "@/repositories/user.repository";
import { User } from "@/entities/user";
import { UpdateUserDTO } from "./update-user.dto";

export class UpdateUsersService {
  constructor(private readonly _usersRepository: UserRepository) {}

  async execute(id: string, data: UpdateUserDTO): Promise<void> {
    const userExists = await this._usersRepository.findById(id);

    if (!userExists) throw new Error("Usuário não existe!");

    const emailExists = await this._usersRepository.findByEmail(data.email);

    if (emailExists) throw new Error("E-mail já existe!");

    data.password = await hash(data.password, 12);

    const user = new User(data);

    await this._usersRepository.update(id, user);
  }
}
