import csvParse from 'csv-parse';
import fs from 'fs';
import { ICategoryProvider } from "../model/provider";

interface IImportCategory {
  name: string
  description: string
}

export class ImportCategoryUseCase {
  constructor(private categoryProvider: ICategoryProvider) { }

  loadCategories(file): Promise<IImportCategory[]> {
    return new Promise((resolve, reject) => {
      const stream = fs.createReadStream(file.path)
      const categories: IImportCategory[] = []
      const parseFile = csvParse()

      stream.pipe(parseFile)

      parseFile.on('data', async (line) => {
        const [name, description] = line

        categories.push({
          name,
          description
        })
      }).on('end', () => {
        resolve(categories)
      }).on('error', (err) => {
        reject(err)
      })

    })
  }

  async execute(file: any): Promise<void> {
    const categories = await this.loadCategories(file)

    categories.map(category => {
      const { name, description } = category

      const existsCategory = this.categoryProvider.findByName(name)

      if (existsCategory) {
        throw new Error("Category already exists!");
      }

      this.categoryProvider.create({ name, description })
    })
  }

}