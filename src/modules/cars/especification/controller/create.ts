import { ISpecificationProvider } from "../model/provider";

type Payload = {
  name: string
  description: string
}

export class CreateSpecificationUseCaseController {
  constructor(private specificationProvider: ISpecificationProvider) { }

  execute({ name, description }: Payload): void {

    const alreadyExists = this.specificationProvider.findByName(name)

    if (alreadyExists) {
      throw new Error("Specification already exists!");
    }

    this.specificationProvider.create({name, description})

  }
}