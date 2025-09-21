import { Request, Response } from 'express'
import Topic from '../models/topic.model'

//[GET]/api/v1/topics
export const index = async (req: Request, res: Response) => {
  const topics = await Topic.find({})
  res.json(topics)
}

//[GET]/api/v1/topics/detail/:id
export const detail = async (req: Request, res: Response) => {
  try {
    const id: string = req.params.id

    const topic = await Topic.findOne({
      _id: id,
    })

    return res.json(topic)
  } catch (error) {
    console.error('Lỗi :', error)
    return res.status(400).json({
      code: 400,
      message: 'Không tồn tại!',
    })
  }
}
