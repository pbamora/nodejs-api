import { Specification } from "../model/entities";
import { ISpecificationProvider } from "../model/provider";


export class EspecificationProvider implements ISpecificationProvider {
  private specifications: Specification[]

  constructor() {
    this.specifications = []
  }

  findByName(name: string): Specification {
    const specification = this.specifications.find(s => s.name === name)
    return specification
  }

  findOne(id: string): Specification {
    const specification = this.specifications.find(s => s.id === id)
    return specification
  }

  list(): Specification[] {
    return this.specifications
  }

  updateOne(id: string, payload: { name: string; description: string; }): void {
    const index = this.specifications.findIndex(s => s.id === id)
    Object.assign(this.specifications[index], payload)

  }

  create(payload: { name: string; description: string; }): void {
    const specification = new Specification()
    Object.assign(specification, payload)

    this.specifications.push(specification)
  }

}