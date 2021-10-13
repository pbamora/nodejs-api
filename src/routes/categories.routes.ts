import { Router } from 'express'
import { CreateCategoryUseCaseController } from '../modules/cars/categories/controllers/create'
import { FindOneCategoryUseCaseController } from '../modules/cars/categories/controllers/get'
import { ListCategoryUseCaseController } from '../modules/cars/categories/controllers/list'
import { UpdateCategoryUseCaseController } from '../modules/cars/categories/controllers/update'
import { CategoriesProvider } from '../modules/cars/categories/provider/provider'


const categoriesRoutes = Router()
const categoryProvider = new CategoriesProvider()

categoriesRoutes.post('/', (req, reply) => {
  const { name, description } = req.body

  const createCategoryUseCase = new CreateCategoryUseCaseController(categoryProvider)
  createCategoryUseCase.execute({ name, description })

  return reply.status(201).send()
})

categoriesRoutes.get('/', (_, reply) => {

  const listCategoryUseCase = new ListCategoryUseCaseController(categoryProvider)
  const response = listCategoryUseCase.execute()

  return reply.status(201).send(response).json()
})

categoriesRoutes.get('/:id', (req, reply) => {
  const { id } = req.params

  const findOneCategoryUseCase = new FindOneCategoryUseCaseController(categoryProvider)
  const response = findOneCategoryUseCase.execute({ id })

  return reply.status(201).send(response).json()
})

categoriesRoutes.put('/:id', (req, reply) => {
  const { id } = req.params
  const { description, name } = req.body

  const updateCategoryUseCase = new UpdateCategoryUseCaseController(categoryProvider)
  updateCategoryUseCase.execute({ id, name, description })

  return reply.status(201).send({ message: 'Category successfully updated!' }).json()
})

export { categoriesRoutes }
