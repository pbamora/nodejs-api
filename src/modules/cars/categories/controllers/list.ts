import { Request, Response } from "express";
import { ICategoryProvider } from "../model/provider";

export class ListCategoryUseCaseController {
  constructor(private categoryProvider: ICategoryProvider) {}

  handle(_: Request, reply: Response): void {
    try {
      const response = this.categoryProvider.list();
      reply.status(201).send(response).json();
    } catch (error) {
      console.log(error);
    }
  }
}
