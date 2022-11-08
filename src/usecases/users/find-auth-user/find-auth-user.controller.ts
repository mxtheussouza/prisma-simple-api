import { Request, Response } from "express";
import { FindAuthUserService } from "./find-auth-user";

export class FindAuthUserController {
  constructor(private readonly _findAuthUserService: FindAuthUserService) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { authorization } = request.headers;

      const data = await this._findAuthUserService.execute({ authorization });

      return response.status(200).json(data);
    } catch (error: any) {
      return response
        .status(500)
        .json({ message: error.message || "Erro interno de servidor." });
    }
  }
}
