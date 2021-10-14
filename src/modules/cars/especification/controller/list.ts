import { Request, Response } from "express";
import { ListSpecificationUseCase } from "../cases/lists";

export class ListSpecificationUseCaseController {
  constructor(private listSpecificationUseCase: ListSpecificationUseCase) {}

  handle(_: Request, reply: Response): void {
    try {
      const response = this.listSpecificationUseCase.execute();
      reply.status(201).send(response).json();
    } catch (error) {
      console.log(error);
    }
  }
}
