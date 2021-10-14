import { Request, Response } from "express";
import { ListCategoryUseCase } from "../cases/list";

export class ListCategoryUseCaseController {
  constructor(private listCategoryUseCase: ListCategoryUseCase) {}

  handle(_: Request, reply: Response): void {
    try {
      const response = this.listCategoryUseCase.execute();
      reply.status(201).send(response).json();
    } catch (error) {
      console.log(error);
    }
  }
}
