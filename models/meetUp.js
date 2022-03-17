import mongoose from 'mongoose'

const Schema = mongoose.Schema

const meetUpSchema = new Schema({
  owner: {type: Schema.Types.ObjectId, ref: "Profile"},
  subject: {
    type: String,
  },
  details: {
    type: String,
  },

}, {
  timestamps: true
})

const MeetUp = mongoose.model('MeetUp', meetUpSchema)

export {
  MeetUp
}