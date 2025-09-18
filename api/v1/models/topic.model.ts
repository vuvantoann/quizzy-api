import mongoose from 'mongoose'

const topicSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    level: {
      type: String,
      enum: ['Dễ', 'Trung bình', 'Khó'],
      default: 'Dễ',
    },
    questions: {
      type: Number,
      default: 0,
    },
    status: {
      type: String,
      default: 'active',
    },
    deleted: {
      type: Boolean,
      default: false,
    },
    deleteAt: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true,
  }
)

const Topic = mongoose.model('Topic', topicSchema, 'topics')

export default Topic
