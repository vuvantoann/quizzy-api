import mongoose from 'mongoose'

const questionSchema = new mongoose.Schema(
  {
    topicId: String,
    question: String,
    answers: Array,
    correctAnswer: Number,
    deleted: {
      type: Boolean,
      default: false,
    },
    deletedAt: Date,
  },
  {
    timestamps: true,
  }
)

const Question = mongoose.model('Question', questionSchema, 'questions')

export default Question
