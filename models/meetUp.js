import mongoose from 'mongoose'

const Schema = mongoose.Schema

const replySchema = new Schema({
  message: {
    type: String,
    required: true
  },
  oPoster: String,
}, {
  timestamps: true
})

const meetUpSchema = new Schema({
  owner: {type: Schema.Types.ObjectId, ref: "Profile"},
  subject: {
    type: String,
    required: true
  },
  replies: [replySchema]

}, {
  timestamps: true
})

const MeetUp = mongoose.model('MeetUp', meetUpSchema)

export {
  MeetUp
}