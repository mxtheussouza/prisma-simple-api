import { Request, Response } from "express";
import { FindAllUsersService } from "./find-all-users";

export class FindAllUsersController {
  constructor(private readonly _findAllUsersService: FindAllUsersService) {}

  async handle(_: Request, response: Response): Promise<Response> {
    try {
      const data = await this._findAllUsersService.execute();

      return response.status(200).json(data);
    } catch (error: any) {
      return response
        .status(500)
        .json({ message: error.message || "Erro interno de servidor." });
    }
  }
}
