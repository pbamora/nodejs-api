import { Category } from "./entities";

type Payload = {
  name: string
  description: string
}

export interface ICategoryProvider {
  findByName(name: string): Category
  findOne(id: string): Category
  list(): Category[]
  updateOne(id: string, payload: Payload): void
  create(payload: Payload): void
}