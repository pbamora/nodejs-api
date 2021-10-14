import Fastify from "fastify";
import { jsonParser } from "./infra/parsers";
import { registerRoutes } from "./routes";

const fastify = Fastify({
  logger: true
})

fastify.addContentTypeParser(
  'application/json',
  { parseAs: 'string' },
  jsonParser,
)

registerRoutes(fastify)

fastify.listen(3333, (err, adress) => {
  if (err) {
    fastify.log.error(err)
    process.exit
  }

  console.log(`Server listen in ${adress}`)
})