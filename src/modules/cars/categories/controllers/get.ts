import { Category } from "../model/entities";
import { ICategoryProvider } from "../model/provider";
import { CategoriesProvider } from "../provider/provider";

interface IRequest {
  name?: string
  id: string
}

export class FindOneCategoryUseCaseController {
  constructor(private categoryProvider: ICategoryProvider) { }

  execute({ id }: IRequest): Category {
    const category = this.categoryProvider.findOne(id)

    if (!category) {
      throw new Error('Category not exists!1');
    }

    return category
  }
}