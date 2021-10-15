export const swaggerSetup = {
  info: {
    title: 'Rentalx Documentation',
    description: 'This is an API rent',
    version: '1.0.0'
  },
  externalDocs: {
    url: 'https://swagger.io',
    description: 'Find more info here'
  },
  host: 'localhost',
  schemes: ['http'],
  consumes: ['application/json'],
  produces: ['application/json'],
  paths: {
    categories: {
      post: {
        summary: "Create category",
        description: "Create a new category",
        requestBody: {
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  name: {
                    type: 'string'
                  },
                  description: {
                    type: 'string',
                  }
                },
                example: {
                  name: "Category name example",
                  description: "Category description example"
                }
              }
            }
          }
        }
      }
    }
  },
  tags: [
    { name: 'user', description: 'User related end-points' },
    { name: 'code', description: 'Code related end-points' }
  ],
  definitions: {
    Category: {
      type: 'object',
      required: ['id', 'email'],
      properties: {
        id: { type: 'string', format: 'uuid' },
        description: { type: 'string' },
        name: { type: 'string' },
        created_at: { type: 'string', format: 'date-time' }
      }
    },
    Specification: {
      type: 'object',
      required: ['id', 'email'],
      properties: {
        id: { type: 'string', format: 'uuid' },
        description: { type: 'string' },
        name: { type: 'string' },
        created_at: { type: 'string', format: 'date-time' }
      }
    }
  },
  securityDefinitions: {
    apiKey: {
      type: 'apiKey',
      name: 'apiKey',
      in: 'header'
    }
  }
}