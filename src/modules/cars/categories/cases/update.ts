import { ICategoryProvider } from "../model/provider";

export class UpdateCategoryUseCase {
  constructor(private categoryProvider: ICategoryProvider) {}

  execute(id: string, name: string, description: string): void {
    const nameAlreadyExists = this.categoryProvider.findByName(name);

    if (nameAlreadyExists) {
      throw new Error("Caregory name already exists!");
    }

    this.categoryProvider.updateOne(id, { name, description });
  }
}
