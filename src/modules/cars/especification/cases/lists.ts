import { Specification } from "../model/entities";
import { ISpecificationProvider } from "../model/provider";

export class ListSpecificationUseCase {
  constructor(private specificationProvider: ISpecificationProvider) {}
  execute(): Specification[] {

    try {
      return this.specificationProvider.list()
    } catch (error) {
      console.log(error)
    }
  }
}
