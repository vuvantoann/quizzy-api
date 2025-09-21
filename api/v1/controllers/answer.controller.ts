import { Request, Response } from 'express'
import Answer from '../models/answer.model'

//[GET]/api/v1/answers
export const index = async (req: Request, res: Response) => {
  const answers = await Answer.find({})
  res.json(answers)
}

//[GET]/api/v1/answers/detail/:id
export const detail = async (req: Request, res: Response) => {
  try {
    const id: string = req.params.id

    const answer = await Answer.findOne({
      _id: id,
    })

    return res.json(answer)
  } catch (error) {
    console.error('Lỗi :', error)
    return res.status(400).json({
      code: 400,
      message: 'Không tồn tại!',
    })
  }
}

//[POST]/api/v1/answers/save
export const saveAnswer = async (req: Request, res: Response) => {
  try {
    const newAnswer = new Answer(req.body)
    const data = await newAnswer.save()

    return res.json({
      code: 200,
      message: 'Lưu answer thành công!',
      data: data,
    })
  } catch (error) {
    console.error('Lỗi:', error)
    return res.status(400).json({
      code: 400,
      message: 'Có lỗi xảy ra!',
    })
  }
}
