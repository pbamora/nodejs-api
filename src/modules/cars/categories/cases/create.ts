import { ICategoryProvider } from "../model/provider";

export class CreateCategoryUseCase {
  constructor(private categoryProvider: ICategoryProvider) {}

  execute(name: string, description: string): void {
    const nameAlreadyExists = this.categoryProvider.findByName(name);

    if (nameAlreadyExists) {
      throw new Error("Caregory name already exists!");
    }

    this.categoryProvider.create({ name, description });
  }
}
