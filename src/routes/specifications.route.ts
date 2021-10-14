import { FastifyInstance } from "fastify";
import { CreateSpecificationUseCase } from "../modules/cars/especification/cases/create";
import { GetSpecificationUseCase } from "../modules/cars/especification/cases/get";
import { ListSpecificationUseCase } from "../modules/cars/especification/cases/lists";
import { UpdateSpecificationUseCase } from "../modules/cars/especification/cases/update";
import { CreateSpecificationUseCaseController } from "../modules/cars/especification/controller/create";
import { GetSpecificationUseCaseController } from "../modules/cars/especification/controller/get";
import { ListSpecificationUseCaseController } from "../modules/cars/especification/controller/list";
import { UpdateSpecificationUseCaseController } from "../modules/cars/especification/controller/update";
import { EspecificationProvider } from "../modules/cars/especification/provider/provider";

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


export const specificationRoutes = async (server: FastifyInstance, _: any, done: any) => {

  server.post("/specification", async (req, reply) => {
    createSpecificationUseCaseController.handle(req, reply);
  });

  server.get("/specification", async (_, reply) => {
    getSpecificationUseCaseController.handle(_, reply);
  });

  server.get("/specification/:id", async (req, reply) => {
    listSpecificationUseCaseController.handle(req, reply);
  });

  server.put("/specification/:id", async (req, reply) => {
    updateSpecificationUseCaseController.handle(req, reply);
  });

  done()

}
