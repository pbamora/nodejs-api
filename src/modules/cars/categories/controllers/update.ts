import { Request, Response } from "express";
import { UpdateCategoryUseCase } from "../cases/update";

export class UpdateCategoryUseCaseController {
  constructor(private updateCategoryUseCase: UpdateCategoryUseCase) {}

  handle(req: Request, reply: Response): void {
    const { name, description } = req.body;
    const { id } = req.params;

    try {
      this.updateCategoryUseCase.execute(id, name, description);

      reply.status(201).send({ message: "Category updated!" });
    } catch (error) {
      console.log(error);
    }
  }
}
