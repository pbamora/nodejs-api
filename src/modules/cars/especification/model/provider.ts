import { Specification } from "./entities";

type Payload = {
  name: string
  description: string
}

export interface ISpecificationProvider {
  findByName(name: string): Specification
  findOne(id: string): Specification
  list(): Specification[]
  updateOne(id: string, payload: Payload): void
  create(payload: Payload): void
}