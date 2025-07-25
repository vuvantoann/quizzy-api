import { Request, Response } from 'express'
import User from '../models/user.model'
import md5 from 'md5'
import * as generateHelper from '../../../helper/generate'
//[GET]/api/v1/users
export const index = async (req: Request, res: Response) => {
  const users = await User.find({
    deleted: false,
  })
  res.json(users)
}

//[PATCH]/api/v1/users/register
export const register = async (req: Request, res: Response) => {
  try {
    const email: string = req.body.email

    const emailExist = await User.findOne({ email: email })

    if (emailExist) {
      res.json({
        code: 400,
        message: 'Email đã tồn tại',
      })
    } else {
      req.body.password = md5(req.body.password)
      const newUser = new User({
        fullName: req.body.fullName,
        email: req.body.email,
        password: req.body.password,
        token: generateHelper.generateRandomString(20),
      })

      await newUser.save()
      const token = newUser.token
      res.cookie('token', token)
      res.json({
        code: 200,
        message: 'tạo tài khoản thành công',
        token: token,
      })
    }
  } catch (error) {
    console.error('Lỗi changeStatus:', error)
    return res.status(400).json({
      code: 400,
      message: 'Không tồn tại!',
    })
  }
}

//[POST]/api/v1/users/login
export const login = async (req: Request, res: Response) => {
  try {
    const email: string = req.body.email
    const password: string = md5(req.body.password)
    const user = await User.findOne({
      email: email,
      deleted: false,
    })
    if (!user) {
      res.json({
        code: 400,
        message: 'Email không tồn tại',
      })
      return
    }

    if (password != user.password) {
      res.json({
        code: 400,
        message: 'Sai mật khẩu',
      })
      return
    }

    if (user.status === 'inactive') {
      res.json({
        code: 400,
        message: 'Tài khoản đã bị khóa',
      })
      return
    }

    const token = user.token
    res.cookie('token', token)

    res.json({
      code: 200,
      message: 'Đăng nhập thành công',
      token: token,
    })
  } catch (error) {
    console.error('Lỗi changeStatus:', error)
    return res.status(400).json({
      code: 400,
      message: 'Không tồn tại!',
    })
  }
}
