import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { User } from "@/entities/user";
import { UserRepository } from "@/repositories/user.repository";
import { auth } from "@/config/auth";
import { LoginDTO } from "./login.dto";

export class LoginService {
  constructor(private readonly _usersRepository: UserRepository) {}

  private async _verifyCredentials(
    email: string,
    password: string,
  ): Promise<User> {
    const user = await this._usersRepository.findByEmail(email);

    if (user && (await compare(password, user.password))) return user;

    throw new Error("Credenciais inválidas!");
  }

  async execute(data: LoginDTO): Promise<{ token: string }> {
    const user = await this._verifyCredentials(data.email, data.password);

    const token = sign({ id: user.id, email: user.email }, auth.secret, {
      expiresIn: auth.expires,
    });

    return { token };
  }
}
