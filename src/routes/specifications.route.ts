import { Router } from "express";
import { ListCategoryUseCase } from "../modules/cars/categories/cases/list";
import { UpdateCategoryUseCase } from "../modules/cars/categories/cases/update";
import { CreateSpecificationUseCase } from "../modules/cars/especification/cases/create";
import { GetSpecificationUseCase } from "../modules/cars/especification/cases/get";
import { ListSpecificationUseCase } from "../modules/cars/especification/cases/lists";
import { UpdateSpecificationUseCase } from "../modules/cars/especification/cases/update";
import { CreateSpecificationUseCaseController } from "../modules/cars/especification/controller/create";
import { GetSpecificationUseCaseController } from "../modules/cars/especification/controller/get";
import { ListSpecificationUseCaseController } from "../modules/cars/especification/controller/list";
import { UpdateSpecificationUseCaseController } from "../modules/cars/especification/controller/update";
import { EspecificationProvider } from "../modules/cars/especification/provider/provider";

const especificationRoutes = Router();
const especificationProvider = new EspecificationProvider();

const createSpecificationUseCase = new CreateSpecificationUseCase(
  especificationProvider
);
const updateSpecificationUseCase = new UpdateSpecificationUseCase(
  especificationProvider
);
const listSpecificationUseCase = new ListSpecificationUseCase(
  especificationProvider
);
const getSpecificationUseCase = new GetSpecificationUseCase(
  especificationProvider
);

const createSpecificationUseCaseController =
  new CreateSpecificationUseCaseController(createSpecificationUseCase);

const getSpecificationUseCaseController = new GetSpecificationUseCaseController(
  getSpecificationUseCase
);
const listSpecificationUseCaseController =
  new ListSpecificationUseCaseController(listSpecificationUseCase);
const updateSpecificationUseCaseController =
  new UpdateSpecificationUseCaseController(updateSpecificationUseCase);

especificationRoutes.post("/", (req, reply) => {
  createSpecificationUseCaseController.handle(req, reply);
});

especificationRoutes.get("/", (_, reply) => {
  listSpecificationUseCaseController.handle(_, reply);
});

especificationRoutes.get("/:id", (req, reply) => {
  getSpecificationUseCaseController.handle(req, reply);
});

especificationRoutes.put("/:id", (req, reply) => {
  updateSpecificationUseCaseController.handle(req, reply);
});

export { especificationRoutes };
