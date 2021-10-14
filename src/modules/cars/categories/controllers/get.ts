import { Request, Response } from "express";
import { GetCategoryUseCase } from "../cases/get";

export class GetCategoryUseCaseController {
  constructor(private getCategoryUseCase: GetCategoryUseCase) {}

  handle(req: Request, reply: Response): void {
    const { id } = req.params;

    try {
      const response = this.getCategoryUseCase.execute(id);
      reply.status(201).send(response).json();
    } catch (error) {
      console.log(error);
    }
  }
}
