import { FastifyReply, FastifyRequest } from "fastify";
import { CreateSpecificationUseCase } from "../cases/create";

export class CreateSpecificationUseCaseController {
  constructor(private createSpecificationUseCase: CreateSpecificationUseCase) {}

  handle(req: FastifyRequest, reply: FastifyReply): void {
    const { name, description } = req.body as any;

    try {
      this.createSpecificationUseCase.execute(name, description);

      reply.status(201).send({ message: "Specification created!" });
    } catch (error) {
      console.log(error);
    }
  }
}
