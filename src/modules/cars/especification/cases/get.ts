import { Specification } from "../model/entities";
import { ISpecificationProvider } from "../model/provider";

export class GetSpecificationUseCase {
  constructor(private specificationProvider: ISpecificationProvider) {}

  execute(id: string): Specification {
    try {
      return this.specificationProvider.findOne(id);
    } catch (error) {
      console.log(error);
    }
  }
}
