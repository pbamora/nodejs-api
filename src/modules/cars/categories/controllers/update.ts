import { ICategoryProvider } from "../model/provider";

interface IRequest {
  id: string
  name: string
  description: string
}

export class UpdateCategoryUseCaseController {
  constructor(private categoryProvider: ICategoryProvider) { }

  execute({ id, description, name }: IRequest): void {
    const payload = {
      name,
      description
    }

    this.categoryProvider.updateOne(id, payload)
  }
}