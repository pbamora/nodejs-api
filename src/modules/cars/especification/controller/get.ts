import { FastifyReply, FastifyRequest } from "fastify";
import { GetSpecificationUseCase } from "../cases/get";

export class GetSpecificationUseCaseController {
  constructor(private getSpecificationUseCase: GetSpecificationUseCase) { }

  handle(req: FastifyRequest, reply: FastifyReply): void {
    const { id } = req.params as any;

    try {
      const response = this.getSpecificationUseCase.execute(id);
      reply.status(201).send(response)
    } catch (error) {
      console.log(error);
    }
  }
}
