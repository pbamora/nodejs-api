import { FastifyReply, FastifyRequest } from "fastify";
import { UpdateSpecificationUseCase } from "../cases/update";

export class UpdateSpecificationUseCaseController {
  constructor(private updateSpecificationUseCase: UpdateSpecificationUseCase) {}

  handle(req: FastifyRequest, reply: FastifyReply): void {
    const { name, description } = req.body as any;
    const { id } = req.params as any;

    try {
      this.updateSpecificationUseCase.execute(id, name, description);

      reply.status(201).send({ message: "Specification updated!" });
    } catch (error) {
      console.log(error);
    }
  }
}
