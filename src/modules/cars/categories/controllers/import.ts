import { FastifyReply, FastifyRequest } from "fastify";
import { ImportCategoryUseCase } from "../cases/import";

export class ImportCategoryUseCaseController {
  constructor(private importCategoryUseCase: ImportCategoryUseCase) { }
  
  handler(req: FastifyRequest, reply: FastifyReply) {
    const { file } = req as any

    try {
      this.importCategoryUseCase.execute(file)
      return reply.send()
    } catch (error) {
      console.error(error)
    }

  }
}