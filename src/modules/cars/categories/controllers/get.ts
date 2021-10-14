import { FastifyReply, FastifyRequest } from "fastify";
import { GetCategoryUseCase } from "../cases/get";

export class GetCategoryUseCaseController {
  constructor(private getCategoryUseCase: GetCategoryUseCase) { }

  handle(req: FastifyRequest, reply: FastifyReply): void {
    const { id } = req.params as any;

    try {
      const response = this.getCategoryUseCase.execute(id);
      reply.status(201).send(response)
    } catch (error) {
      console.log(error);
    }
  }
}
