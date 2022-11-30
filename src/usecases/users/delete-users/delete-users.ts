import { HttpError } from "@/helpers/http-error";
import { UserRepository } from "@/repositories/user.repository";

export class DeleteUsersService {
  constructor(private readonly _userRepository: UserRepository) {}

  async execute(id: string): Promise<void> {
    const userExists = await this._userRepository.findById(id);

    if (!userExists) {
      throw new HttpError(
        "User does not exist or has already been deleted.",
        400,
      );
    }

    await this._userRepository.delete(id);
  }
}
