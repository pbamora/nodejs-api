import { Request, Response } from "express";
import { ISpecificationProvider } from "../model/provider";

export class UpdateSpecificationUseCaseController {
  constructor(private specificationProvider: ISpecificationProvider) {}

  handle(req: Request, reply: Response): void {
    const { name, description } = req.body;
    const { id } = req.params;
    const nameAlreadyExists = this.specificationProvider.findByName(name);

    if (nameAlreadyExists) {
      reply.status(400).send({ error: "Specification name already exists!" });
    }

    try {
      this.specificationProvider.updateOne(id, { name, description });

      reply.status(201).send({ message: "Specification updated!" });
    } catch (error) {
      console.log(error);
    }
  }
}
