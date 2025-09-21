import mongoose from 'mongoose'

const answerSchema = new mongoose.Schema(
  {
    examId: String,
    userId: String,
    answers: [
      {
        questionId: String,
        answer: Number,
      },
    ],
  },
  {
    timestamps: true,
  }
)

const Answer = mongoose.model('Answer', answerSchema, 'answers')

export default Answer
