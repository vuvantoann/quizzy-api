import { Express } from 'express'
import { questionRoutes } from './question.route'

const routesV1 = (app: Express) => {
  const version = '/api/v1'

  app.use(version + '/questions', questionRoutes)
}

export default routesV1
