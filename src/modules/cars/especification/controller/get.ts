import { Request, Response } from "express";
import { ISpecificationProvider } from "../model/provider";

export class GetSpecificationUseCaseController {
  constructor(private specificationProvider: ISpecificationProvider) {}

  handle(req: Request, reply: Response): void {
    const { id } = req.params;

    try {
      const response = this.specificationProvider.findOne(id);
      reply.status(201).send(response).json();
    } catch (error) {
      console.log(error);
    }
  }
}
