import { Request, Response } from 'express'
import User from '../models/user.model'

//[GET]/api/v1/users
export const index = async (req: Request, res: Response) => {
  const users = await User.find({
    deleted: false,
  })
  res.json(users)
}
