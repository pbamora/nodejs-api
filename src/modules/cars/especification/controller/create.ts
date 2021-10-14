import { Request, Response } from "express";
import { CreateSpecificationUseCase } from "../cases/create";

export class CreateSpecificationUseCaseController {
  constructor(private createSpecificationUseCase: CreateSpecificationUseCase) {}

  handle(req: Request, reply: Response): void {
    const { name, description } = req.body;

    try {
      this.createSpecificationUseCase.execute(name, description);

      reply.status(201).send({ message: "Specification created!" });
    } catch (error) {
      console.log(error);
    }
  }
}
