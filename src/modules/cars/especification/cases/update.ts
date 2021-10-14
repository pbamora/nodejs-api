import { ISpecificationProvider } from "../model/provider";

export class UpdateSpecificationUseCase {
  constructor(private specificationProvider: ISpecificationProvider) {}

  execute(id: string, name: string, description: string): void {
    const nameAlreadyExists = this.specificationProvider.findByName(name);

    if (nameAlreadyExists) {
      throw new Error("Specification name already exists!");
    }

    try {
      this.specificationProvider.updateOne(id, { name, description });
    } catch (error) {}
  }
}
