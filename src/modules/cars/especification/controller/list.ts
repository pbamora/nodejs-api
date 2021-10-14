import { FastifyReply, FastifyRequest } from "fastify";
import { ListSpecificationUseCase } from "../cases/lists";

export class ListSpecificationUseCaseController {
  constructor(private listSpecificationUseCase: ListSpecificationUseCase) { }

  handle(_: FastifyRequest, reply: FastifyReply): void {
    try {
      const response = this.listSpecificationUseCase.execute();
      reply.status(201).send(response)
    } catch (error) {
      console.log(error);
    }
  }
}
