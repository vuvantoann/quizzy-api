import { Router } from 'express'

const router: Router = Router()
import * as controller from '../controllers/user.controller'

router.get('/', controller.index)

router.post('/register', controller.register)

router.post('/login', controller.login)

export const userRoutes: Router = router
