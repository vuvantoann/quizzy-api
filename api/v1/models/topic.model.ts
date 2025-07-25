import mongoose from 'mongoose'

const topicSchema = new mongoose.Schema(
  {
    name: String,

    status: {
      type: String,
      default: 'active',
    },
    deleted: {
      type: Boolean,
      default: false,
    },
    deleteAt: Date,
  },
  {
    timestamps: true,
  }
)

const Topic = mongoose.model('Topic', topicSchema, 'topics')

export default Topic
