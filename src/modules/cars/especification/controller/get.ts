import { Request, Response } from "express";
import { GetSpecificationUseCase } from "../cases/get";
import { ISpecificationProvider } from "../model/provider";

export class GetSpecificationUseCaseController {
  constructor(private getSpecificationUseCase: GetSpecificationUseCase) {}

  handle(req: Request, reply: Response): void {
    const { id } = req.params;

    try {
      const response = this.getSpecificationUseCase.execute(id);
      reply.status(201).send(response).json();
    } catch (error) {
      console.log(error);
    }
  }
}
