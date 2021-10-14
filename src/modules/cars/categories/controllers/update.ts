import { FastifyReply, FastifyRequest } from "fastify";
import { UpdateCategoryUseCase } from "../cases/update";

export class UpdateCategoryUseCaseController {
  constructor(private updateCategoryUseCase: UpdateCategoryUseCase) { }

  handle(req: FastifyRequest, reply: FastifyReply): void {
    const { name, description } = req.body as any;
    const { id } = req.params as any;

    try {
      this.updateCategoryUseCase.execute(id, name, description);

      reply.status(201).send({ message: "Category updated!" });
    } catch (error) {
      console.log(error);
    }
  }
}
