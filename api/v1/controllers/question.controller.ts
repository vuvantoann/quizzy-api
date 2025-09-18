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

//[GET]/api/v1/questions/:topicId
export const QuestionsInTopic = async (req: Request, res: Response) => {
  try {
    const topicId: string = req.params.topicId

    const questions = await Question.find({
      topicId: topicId,
    })

    return res.json(questions)
  } catch (error) {
    console.error('Lỗi :', error)
    return res.status(400).json({
      code: 400,
      message: 'Không tồn tại!',
    })
  }
}
