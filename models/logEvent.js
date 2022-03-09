import mongoose from 'mongoose'

const Schema = mongoose.Schema

const logEventSchema = new Schema ({
  name: {
    type: String,
  },

  location: {
    type: String,
  },

  date: {
    type: Date,
  }, 

  eventType: {
    type: String,
    enum: ["Art/Culture", "Nature", "Food", "Work", "Misc"]
  },

  rating: {
    type: String,
    enum: ["I had a blast!", "Meh", "Snoozefest"]
  },

  outsideCZ: {
    type: Boolean,
  },

  entry: {
    type: String,
  },

  owner: {
    type: Schema.Types.ObjectId, ref: "Profile"},
}, {
  timestamps: true
})

const LogEvent = mongoose.model('LogEvent', logEventSchema)

export {
  LogEvent
}