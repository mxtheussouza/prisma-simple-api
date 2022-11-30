import { Request, Response } from "express";
import { FindAllUsersService } from "./find-all-users";

export class FindAllUsersController {
  constructor(private readonly _findAllUsersService: FindAllUsersService) {}

  async handle(_: Request, response: Response): Promise<Response> {
    const data = await this._findAllUsersService.execute();

    return response.status(200).json(data);
  }
}
