import { Category } from "../model/entities";
import { ICategoryProvider } from "../model/provider";

export class GetCategoryUseCase {
  constructor(private categoryProvider: ICategoryProvider) {}

  execute(id: string): Category {
    return this.categoryProvider.findOne(id);
  }
}
