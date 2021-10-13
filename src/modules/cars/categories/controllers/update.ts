import { Request, Response } from "express";
import { ICategoryProvider } from "../model/provider";

export class UpdateCategoryUseCaseController {
  constructor(private categoryProvider: ICategoryProvider) {}

  handle(req: Request, reply: Response): void {
    const { name, description } = req.body;
    const { id } = req.params;
    const nameAlreadyExists = this.categoryProvider.findByName(name);

    if (nameAlreadyExists) {
      reply.status(400).send({ error: "Category name already exists!" });
    }

    try {
      this.categoryProvider.updateOne(id, { name, description });

      reply.status(201).send({ message: "Category updated!" });
    } catch (error) {
      console.log(error);
    }
  }
}
