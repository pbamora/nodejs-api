import { FastifyReply, FastifyRequest } from "fastify";
import { CreateCategoryUseCase } from "../cases/create";

export class CreateCategoryUseCaseController {
  constructor(private createCategoryUseCase: CreateCategoryUseCase) { }

  handle(req: FastifyRequest, reply: FastifyReply): void {
    const { name, description } = req.body as any;

    try {
      this.createCategoryUseCase.execute(name, description);

      reply.status(201).send({ message: "Category created!" });
    } catch (error) {
      console.log(error);
    }
  }
}
