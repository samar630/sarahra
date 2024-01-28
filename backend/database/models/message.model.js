import { Schema, model, SchemaTypes } from 'mongoose'

const messageSchema = new Schema(
  {
    message: {
      type: 'string'
    },
    // user:{type: SchemaTypes.ObjectId,ref: "User"},
    receviedId: SchemaTypes.ObjectId,
    senderId: SchemaTypes.ObjectId
  },
  { timestamps: true }
)

messageSchema.statics.paginate = async function ({
  filter = {},
  page = 1,
  limit = 10
} = {}) {
  const query = this.find(filter)
  const totalDocuments = await this.countDocuments(filter)
  const totalPages = Math.ceil(totalDocuments / limit)
  page = page > totalPages ? totalPages : page
  page = page <= 0 ? 1 : page

  query.skip((page - 1) * limit).limit(limit)

  const results = await query.exec()

  return {
    docs: results,
    totalDocs: totalDocuments,
    totalPages,
    page,
    limit
  }
}

export const messageModel = model('Message', messageSchema)
