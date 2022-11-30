import { hash } from "bcryptjs";
import { UserRepository } from "@/repositories/user.repository";
import { User } from "@/entities/user";
import { HttpError } from "@/helpers/http-error";
import { UpdateUserDTO } from "./update-user.dto";

export class UpdateUsersService {
  constructor(private readonly _userRepository: UserRepository) {}

  async execute(id: string, data: UpdateUserDTO): Promise<void> {
    const userExists = await this._userRepository.findById(id);

    if (!userExists) {
      throw new HttpError("User is invalid or does not exist!", 400);
    }

    const userByEmail = await this._userRepository.findByEmail(data.email);

    if (userExists.email !== userByEmail?.email) {
      throw new HttpError(
        "The email is invalid or has already been used.",
        400,
      );
    }

    data.password = await hash(data.password, 12);

    const user = new User(data);

    await this._userRepository.update(id, user);
  }
}
