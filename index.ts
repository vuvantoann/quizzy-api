import express, { Express, Request, Response } from 'express'
import dotenv from 'dotenv'
import * as database from './config/database'
import Question from './models/question.model'

dotenv.config()
database.connect()
const app: Express = express()
const port: string | number = process.env.PORT || 3000

app.get('/', async (req: Request, res: Response) => {
  const questions = await Question.find({})

  res.json({
    data: 200,
    questions: questions,
  })
})

app.get('/questions/detail/:id', async (req: Request, res: Response) => {
  const id: string = req.params.id
  const question = await Question.findOne({
    _id: id,
  })

  res.json({
    data: 200,
    tasks: question,
  })
})

app.listen(port, () => {
  console.log('lắng nghe thành công ')
})
