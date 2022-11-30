import { verify } from "jsonwebtoken";
import { User } from "@/entities/user";
import { UserRepository } from "@/repositories/user.repository";
import { auth } from "@/config/auth";
import { HttpError } from "@/helpers/http-error";
import { FindAuthUserDTO, JwtPayload } from "./find-auth-user.dto";

export class FindAuthUserService {
  constructor(private readonly _userRepository: UserRepository) {}

  async execute({
    authorization,
  }: FindAuthUserDTO): Promise<Omit<User, "password">> {
    if (!authorization) throw new HttpError("Unauthorized!", 401);

    const token = authorization.split(" ")[1];

    const { id } = verify(token, auth.secret) as JwtPayload;

    const user = await this._userRepository.findById(id);

    if (!user) throw new HttpError("User not found.", 404);

    const { password: _, ...userWithoutPass } = user;

    return userWithoutPass;
  }
}
