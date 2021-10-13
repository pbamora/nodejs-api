import { Category } from "../model/entities"
import { ICategoryProvider } from "../model/provider"

type Payload = {
  name: string
  description: string
}

export class CategoriesProvider implements ICategoryProvider {
  private categories: Category[]

  constructor() {
    this.categories = []
  }

  create(payload: Payload): void {
    const category = new Category()
    Object.assign(category, payload)

    this.categories.push(category)
  }

  findByName(name: string): Category {
    return this.categories.find(s => s.name === name)
  }

  list(): Category[] {
    return this.categories
  }

  findOne(id: string): Category {
    let category: Category

    if (id) {
      category = this.categories.find(s => s.id === id)
      return category
    }

  }

  updateOne(id: string, payload: Payload): void {
    const index = this.categories.findIndex(s => s.id === id)

    Object.assign(this.categories[index], payload)
  }
}