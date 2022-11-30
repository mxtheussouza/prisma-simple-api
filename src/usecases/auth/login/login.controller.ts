import { Request, Response } from "express";
import { LoginService } from "./login";
import { LoginDTO } from "./login.dto";

export class LoginController {
  constructor(private readonly _loginService: LoginService) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { email, password }: LoginDTO = request.body;

    const data = await this._loginService.execute({
      email,
      password,
    });

    return response.status(200).json(data);
  }
}
