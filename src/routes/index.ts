import { FastifyInstance } from "fastify";
import multer from 'fastify-multer';
import { categoriesRoutes } from "./categories.routes";
import { specificationRoutes } from "./specifications.route";

export const registerRoutes = (fastify: FastifyInstance) => {
  fastify.register(multer.contentParser)
  fastify.register(categoriesRoutes)
  fastify.register(specificationRoutes)
}