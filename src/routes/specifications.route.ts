import { Router } from "express";
import { CreateSpecificationUseCaseController } from "../modules/cars/especification/controller/create";
import { GetSpecificationUseCaseController } from "../modules/cars/especification/controller/get";
import { ListSpecificationUseCaseController } from "../modules/cars/especification/controller/list";
import { UpdateSpecificationUseCaseController } from "../modules/cars/especification/controller/update";
import { EspecificationProvider } from "../modules/cars/especification/provider/provider";

const especificationRoutes = Router();
const especificationProvider = new EspecificationProvider();

const createSpecificationUseCaseController =
  new CreateSpecificationUseCaseController(especificationProvider);
const getSpecificationUseCaseController = new GetSpecificationUseCaseController(
  especificationProvider
);
const listSpecificationUseCaseController =
  new ListSpecificationUseCaseController(especificationProvider);
const updateSpecificationUseCaseController =
  new UpdateSpecificationUseCaseController(especificationProvider);

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
