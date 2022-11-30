import { hash } from "bcryptjs";
import { UserRepository } from "@/repositories/user.repository";
import { User } from "@/entities/user";
import { HttpError } from "@/helpers/http-error";
import { CreateUserDTO } from "./create-user.dto";

export class CreateUsersService {
  constructor(private readonly _userRepository: UserRepository) {}

  async execute(data: CreateUserDTO): Promise<void> {
    const userExists = await this._userRepository.findByEmail(data.email);

    if (userExists) {
      throw new HttpError(
        "The email is invalid or has already been used.",
        400,
      );
    }

    data.password = await hash(data.password, 12);

    const user = new User(data);

    await this._userRepository.save(user);
  }
}
