import { Router, Request, Response } from 'express'
import Question from '../models/question.model'

const router: Router = Router()

router.get('/', async (req: Request, res: Response) => {
  const questions = await Question.find({})
  res.json(questions)
})

router.get('/detail/:id', async (req: Request, res: Response) => {
  const id = req.params.id
  const question = await Question.findOne({
    _id: id,
  })
  res.json(question)
})
export const questionRoutes: Router = router
