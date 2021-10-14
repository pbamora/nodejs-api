import { Request, Response } from "express";
import { CreateCategoryUseCase } from "../cases/create";

export class CreateCategoryUseCaseController {
  constructor(private createCategoryUseCase: CreateCategoryUseCase) {}

  handle(req: Request, reply: Response): void {
    const { name, description } = req.body;

    try {
      this.createCategoryUseCase.execute(name, description);

      reply.status(201).send({ message: "Category created!" });
    } catch (error) {
      console.log(error);
    }
  }
}
