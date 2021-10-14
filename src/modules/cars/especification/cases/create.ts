import { ISpecificationProvider } from "../model/provider";

export class CreateSpecificationUseCase {
  constructor(private specificationProvider: ISpecificationProvider) {}

  execute(name: string, description: string): void {
    const nameAlreadyExists = this.specificationProvider.findByName(name);

    if (nameAlreadyExists) {
      throw new Error("Specification name already exists!");
    }

    try {
      this.specificationProvider.create({ name, description });
    } catch (error) {}
  }
}
