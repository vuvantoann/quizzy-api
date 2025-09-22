import { Router } from 'express'

const router: Router = Router()
import * as controller from '../controllers/answer.controller'

router.get('/', controller.index)

router.get('/detail/:id', controller.detail)

router.get('/:userId', controller.AnswerByUser)

router.post('/save', controller.saveAnswer)

export const answerRoutes: Router = router
