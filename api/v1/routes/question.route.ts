import { Router, Request, Response } from 'express'

const router: Router = Router()
import * as controller from '../controllers/question.controller'

router.get('/', controller.index)

router.get('/detail/:id', controller.detail)

export const questionRoutes: Router = router
