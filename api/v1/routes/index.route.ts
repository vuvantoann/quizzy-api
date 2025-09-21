import { Express } from 'express'
import { questionRoutes } from './question.route'
import { userRoutes } from './user.route'
import { topicRoutes } from './topic.route'
import { answerRoutes } from './answer.route'

const routesV1 = (app: Express) => {
  const version = '/api/v1'

  app.use(version + '/questions', questionRoutes)

  app.use(version + '/users', userRoutes)

  app.use(version + '/topics', topicRoutes)

  app.use(version + '/answers', answerRoutes)
}

export default routesV1
