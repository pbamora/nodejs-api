import { Category } from "../../categories/model/entities";
import { ISpecificationProvider } from "../model/provider";

export class ListSpecificationUseCaseController {
  constructor(private specificationProvider: ISpecificationProvider) { }

  execute(): Category[] {
    return this.specificationProvider.list()
  }
}