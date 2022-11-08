import { verify } from "jsonwebtoken";
import { User } from "@/entities/user";
import { UserRepository } from "@/repositories/user.repository";
import { auth } from "@/config/auth";
import { FindAuthUserDTO, JwtPayload } from "./find-auth-user.dto";

export class FindAuthUserService {
  constructor(private readonly _usersRepository: UserRepository) {}

  async execute({
    authorization,
  }: FindAuthUserDTO): Promise<Omit<User, "password">> {
    if (!authorization) throw new Error("Não autorizado!");

    const token = authorization.split(" ")[1];

    const { id } = verify(token, auth.secret) as JwtPayload;

    const user = await this._usersRepository.findById(id);

    if (!user) throw new Error("Usuário não encontrado.");

    const { password: _, ...userWithoutPass } = user;

    return userWithoutPass;
  }
}
