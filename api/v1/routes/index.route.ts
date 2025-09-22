import { Express } from 'express'
import { questionRoutes } from './question.route'
import { userRoutes } from './user.route'
import { topicRoutes } from './topic.route'
import { answerRoutes } from './answer.route'
import * as authMiddleware from '../middlewares/auth.middleware'
const routesV1 = (app: Express) => {
  const version = '/api/v1'

  app.use(version + '/questions', authMiddleware.requireAuth, questionRoutes)

  app.use(version + '/users', userRoutes)

  app.use(version + '/topics', authMiddleware.requireAuth, topicRoutes)

  app.use(version + '/answers', authMiddleware.requireAuth, answerRoutes)
}

export default routesV1
