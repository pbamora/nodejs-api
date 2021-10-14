import { FastifyReply, FastifyRequest } from "fastify";
import { ListCategoryUseCase } from "../cases/list";

export class ListCategoryUseCaseController {
  constructor(private listCategoryUseCase: ListCategoryUseCase) { }

  handle(_: FastifyRequest, reply: FastifyReply): void {
    try {
      const response = this.listCategoryUseCase.execute();
      reply.status(201).send(response)
    } catch (error) {
      console.log(error);
    }
  }
}
