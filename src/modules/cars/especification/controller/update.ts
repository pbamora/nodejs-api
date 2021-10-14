import { Request, Response } from "express";
import { UpdateSpecificationUseCase } from "../cases/update";

export class UpdateSpecificationUseCaseController {
  constructor(private updateSpecificationUseCase: UpdateSpecificationUseCase) {}

  handle(req: Request, reply: Response): void {
    const { name, description } = req.body;
    const { id } = req.params;

    try {
      this.updateSpecificationUseCase.execute(id, name, description);

      reply.status(201).send({ message: "Specification updated!" });
    } catch (error) {
      console.log(error);
    }
  }
}
