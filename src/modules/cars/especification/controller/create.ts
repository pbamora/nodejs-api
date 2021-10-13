import { Request, Response } from "express";
import { ISpecificationProvider } from "../model/provider";

export class CreateSpecificationUseCaseController {
  constructor(private specificationProvider: ISpecificationProvider) {}

  handle(req: Request, reply: Response): void {
    const { name, description } = req.body;
    const nameAlreadyExists = this.specificationProvider.findByName(name);

    if (nameAlreadyExists) {
      reply.status(400).send({ error: "Specification name already exists!" });
    }

    try {
      this.specificationProvider.create({ name, description });

      reply.status(201).send({ message: "Specification created!" });
    } catch (error) {
      console.log(error);
    }
  }
}
