import { Request, Response } from "express";
import { ICategoryProvider } from "../model/provider";

export class CreateCategoryUseCaseController {
  constructor(private categoryProvider: ICategoryProvider) {}

  handle(req: Request, reply: Response): void {
    const { name, description } = req.body;
    const nameAlreadyExists = this.categoryProvider.findByName(name);

    if (nameAlreadyExists) {
      reply.status(400).send({ error: "Category name already exists!" });
    }

    try {
      this.categoryProvider.create({ name, description });

      reply.status(201).send({ message: "Category created!" });
    } catch (error) {
      console.log(error);
    }
  }
}
