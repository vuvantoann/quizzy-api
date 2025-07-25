import { Request, Response } from 'express'
import Topic from '../models/topic.model'

//[GET]/api/v1/questions
export const index = async (req: Request, res: Response) => {
  const topics = await Topic.find({})
  res.json(topics)
}
