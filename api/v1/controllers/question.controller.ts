import { Request, Response } from 'express'
import Question from '../models/question.model'

//[GET]/api/v1/questions
export const index = async (req: Request, res: Response) => {
  const questions = await Question.find({})
  res.json(questions)
}

//[GET]/api/v1/questions/detail/:id
export const detail = async (req: Request, res: Response) => {
  const id = req.params.id
  const question = await Question.findOne({
    _id: id,
  })
  res.json(question)
}
