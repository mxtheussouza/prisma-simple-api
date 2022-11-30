import { Request, Response } from "express";
import { Controller } from "@/interfaces/controller.interface";

export class ControllerServerErrorDecorator implements Controller {
  constructor(private readonly controller: Controller) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const result = await this.controller.handle(request, response);

      return result;
    } catch (error: any) {
      return response
        .status(error.status as number)
        .json({ message: error.message || "Internal server error" });
    }
  }
}
