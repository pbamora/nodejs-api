import { ICategoryProvider } from "../model/provider";

interface IRequest {
  name: string
  description: string
}

export class CreateCategoryUseCaseController {
  constructor(private categoryProvider: ICategoryProvider) { }

  execute({ description, name }: IRequest): void {
    const nameAlreadyExists = this.categoryProvider.findByName(name)

    if (nameAlreadyExists) {
      throw new Error('Category already exists');
    }

    this.categoryProvider.create({ name, description })
  }
}