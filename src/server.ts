import Fastify from "fastify";
import swagger from 'fastify-swagger';
import { jsonParser } from "./infra/parsers";
import { registerRoutes } from "./routes";
import { swaggerSetup } from "./swagger";


const fastify = Fastify({
  logger: true
})

fastify.addContentTypeParser(
  'application/json',
  { parseAs: 'string' },
  jsonParser,
)

fastify.register(swagger, {
  swagger: swaggerSetup as any,
  hiddenTag: 'X-HIDDEN',
  exposeRoute: true,
  routePrefix: '/documentation',
})

registerRoutes(fastify)

fastify.listen(3333, (err, adress) => {
  if (err) {
    fastify.log.error(err)
    process.exit
  }

  console.log(`Server listen in ${adress}`)
})