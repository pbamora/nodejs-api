import { Router } from "express";
import { CreateCategoryUseCase } from "../modules/cars/categories/cases/create";
import { ListCategoryUseCase } from "../modules/cars/categories/cases/list";
import { CreateCategoryUseCaseController } from "../modules/cars/categories/controllers/create";
import { GetCategoryUseCaseController } from "../modules/cars/categories/controllers/get";
import { ListCategoryUseCaseController } from "../modules/cars/categories/controllers/list";
import { UpdateCategoryUseCaseController } from "../modules/cars/categories/controllers/update";
import { CategoriesProvider } from "../modules/cars/categories/provider/provider";

const categoriesRoutes = Router();
const categoryProvider = new CategoriesProvider();
const createCategoryUseCase = new CreateCategoryUseCase(categoryProvider);
const listCategoryUseCase = new ListCategoryUseCase(categoryProvider);

const createCategoryUseCaseController = new CreateCategoryUseCaseController(
  createCategoryUseCase
);
const listCategoryUseCaseController = new ListCategoryUseCaseController(
  listCategoryUseCase
);

const getCategoryUseCaseController = new GetCategoryUseCaseController(
  categoryProvider
);
const updateCategoryUseCaseController = new UpdateCategoryUseCaseController(
  categoryProvider
);

categoriesRoutes.post("/", (req, reply) => {
  createCategoryUseCaseController.handle(req, reply);
});

categoriesRoutes.get("/", (_, reply) => {
  listCategoryUseCaseController.handle(_, reply);
});

categoriesRoutes.get("/:id", (req, reply) => {
  getCategoryUseCaseController.handle(req, reply);
});

categoriesRoutes.put("/:id", (req, reply) => {
  updateCategoryUseCaseController.handle(req, reply);
});

export { categoriesRoutes };
