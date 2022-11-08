import { UserRepository } from "@/repositories/user.repository";

export class DeleteUsersService {
  constructor(private readonly _usersRepository: UserRepository) {}

  async execute(id: string): Promise<void> {
    const userExists = await this._usersRepository.findById(id);

    if (!userExists) throw new Error("Usuário não existe!");

    await this._usersRepository.delete(id);
  }
}
