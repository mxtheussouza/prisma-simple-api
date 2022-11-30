import { Request, Response } from "express";
import { UpdateUsersService } from "./update-users";
import { UpdateUserDTO } from "./update-user.dto";

export class UpdateUsersController {
  constructor(private readonly _updateUsersService: UpdateUsersService) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, password }: UpdateUserDTO = request.body;
    const { id } = request.params;

    await this._updateUsersService.execute(id, {
      name,
      email,
      password,
    });

    return response.status(200).json({ message: "User updated successfully!" });
  }
}
