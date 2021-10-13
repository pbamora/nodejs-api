import { Request, Response } from "express";
import { ISpecificationProvider } from "../model/provider";

export class ListSpecificationUseCaseController {
  constructor(private specificationProvider: ISpecificationProvider) {}

  handle(_: Request, reply: Response): void {
    try {
      const response = this.specificationProvider.list();
      reply.status(201).send(response).json();
    } catch (error) {
      console.log(error);
    }
  }
}
