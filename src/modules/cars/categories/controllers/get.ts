import { Request, Response } from "express";
import { ICategoryProvider } from "../model/provider";

export class GetCategoryUseCaseController {
  constructor(private categoryProvider: ICategoryProvider) {}

  handle(req: Request, reply: Response): void {
    const { id } = req.params;

    try {
      const response = this.categoryProvider.findOne(id);
      reply.status(201).send(response).json();
    } catch (error) {
      console.log(error);
    }
  }
}
