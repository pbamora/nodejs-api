import { Router } from 'express'
import { ListCategoryUseCaseController } from '../modules/cars/categories/controllers/list'
import { CreateSpecificationUseCaseController } from '../modules/cars/especification/controller/create'
import { EspecificationProvider } from '../modules/cars/especification/provider/provider'



const especificationRoutes = Router()
const especificationProvider = new EspecificationProvider()

especificationRoutes.post('/', (req, reply) => {
  const { name, description } = req.body

  const createSpecificationUseCaseController = new CreateSpecificationUseCaseController(especificationProvider)
  createSpecificationUseCaseController.execute({ name, description })

  return reply.status(201).send()
})

especificationRoutes.get('/', (_, reply) => {

  const listSpecificationUseCaseController = new ListCategoryUseCaseController(especificationProvider)
  const response = listSpecificationUseCaseController.execute()

  return reply.status(201).send(response).json()
})

especificationRoutes.get('/:id', (req, reply) => {
  const { id } = req.params

  return reply.status(201).send('response').json()
})

especificationRoutes.put('/:id', (req, reply) => {
  const { id } = req.params
  const { description, name } = req.body

  return reply.status(201).send({ message: 'Category successfully updated!' }).json()
})

export { especificationRoutes }
