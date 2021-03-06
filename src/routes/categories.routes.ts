import { FastifyInstance } from "fastify";
import multer from 'fastify-multer';
import { CreateCategoryUseCase } from "../modules/cars/categories/cases/create";
import { GetCategoryUseCase } from "../modules/cars/categories/cases/get";
import { ImportCategoryUseCase } from "../modules/cars/categories/cases/import";
import { ListCategoryUseCase } from "../modules/cars/categories/cases/list";
import { UpdateCategoryUseCase } from "../modules/cars/categories/cases/update";
import { CreateCategoryUseCaseController } from "../modules/cars/categories/controllers/create";
import { GetCategoryUseCaseController } from "../modules/cars/categories/controllers/get";
import { ImportCategoryUseCaseController } from "../modules/cars/categories/controllers/import";
import { ListCategoryUseCaseController } from "../modules/cars/categories/controllers/list";
import { UpdateCategoryUseCaseController } from "../modules/cars/categories/controllers/update";
import { CategoriesProvider } from "../modules/cars/categories/provider/provider";

// const categoriesRoutes = Router();
const categoryProvider = new CategoriesProvider();
const createCategoryUseCase = new CreateCategoryUseCase(categoryProvider);
const listCategoryUseCase = new ListCategoryUseCase(categoryProvider);
const getCategoryUseCase = new GetCategoryUseCase(categoryProvider);
const updateCategoryUseCase = new UpdateCategoryUseCase(categoryProvider);
const importCategoryUseCase = new ImportCategoryUseCase(categoryProvider)

const createCategoryUseCaseController = new CreateCategoryUseCaseController(
  createCategoryUseCase
);
const listCategoryUseCaseController = new ListCategoryUseCaseController(
  listCategoryUseCase
);
const getCategoryUseCaseController = new GetCategoryUseCaseController(
  getCategoryUseCase
);
const updateCategoryUseCaseController = new UpdateCategoryUseCaseController(
  updateCategoryUseCase
);
const importCategoryUseCaseController = new ImportCategoryUseCaseController(
  importCategoryUseCase
);

const upload = multer({
  dest: './tmp',
})

export const categoriesRoutes = async (server: FastifyInstance, _: any, done: any) => {
  server.post("/categories", async (req, reply) => {
    createCategoryUseCaseController.handle(req, reply);
  });

  server.post('/categories/import', { preHandler: upload.single('file') }, async (req, reply) => {
    importCategoryUseCaseController.handler(req, reply)
  })

  server.get("/categories", async (_, reply) => {
    listCategoryUseCaseController.handle(_, reply);
  });

  server.get("/categories/:id", async (req, reply) => {
    getCategoryUseCaseController.handle(req, reply);
  });

  server.put("/categories/:id", async (req, reply) => {
    updateCategoryUseCaseController.handle(req, reply);
  });

}


