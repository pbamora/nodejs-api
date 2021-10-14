import { FastifyInstance } from "fastify";
import { categoriesRoutes } from "./categories.routes";
import { specificationRoutes } from "./specifications.route";

export const registerRoutes = (fastify: FastifyInstance) => {
  fastify.register(categoriesRoutes)
  fastify.register(specificationRoutes)
}