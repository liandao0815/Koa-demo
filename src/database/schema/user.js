import mongoose from '../connector'

const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const userSchema = new Schema(
  {
    username: { type: String, required: true, unique: true },

    password: { type: String, required: true },

    token: { type: String, default: '' },

    avatar: { type: String, default: '' },

    introduction: { type: String, default: '' },

    collect: [{ type: ObjectId, ref: 'Article' }]
  },
  { collection: 'User', versionKey: false }
)

export default userSchema