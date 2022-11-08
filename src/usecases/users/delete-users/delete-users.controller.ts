import { Request, Response } from "express";
import { DeleteUsersService } from "./delete-users";

export class DeleteUsersController {
  constructor(private readonly _deleteUsersService: DeleteUsersService) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params;

      await this._deleteUsersService.execute(id);

      return response
        .status(200)
        .json({ message: "User deleted successfully" });
    } catch (error: any) {
      return response
        .status(500)
        .json({ message: error.message || "Erro interno de servidor." });
    }
  }
}
