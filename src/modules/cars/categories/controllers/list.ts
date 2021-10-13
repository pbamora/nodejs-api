import { Category } from "../model/entities";
import { ICategoryProvider } from "../model/provider";

export class ListCategoryUseCaseController {
  constructor(private categoryProvider: ICategoryProvider) { }

  execute(): Category[] {
    return this.categoryProvider.list()
  }
}