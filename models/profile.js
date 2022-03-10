import mongoose from 'mongoose'

const logEventSchema = new mongoose.Schema({
  name: String,
  location: String,
  date: Date,
  eventType: {
    type: String,
    enum: ["Art/Culture", "Nature", "Food", "Work", "Misc"]
  },
  rating: {
    type: String,
    enum: ["I had a blast!", "Meh", "Snoozefest"]
  },
  outsideCZ: Boolean,
  entry:String,
}, {
  timestamps: true
})

const profileSchema = new mongoose.Schema({
  name: String,
  avatar: String,
  logEvents: [logEventSchema],
}, {
  timestamps: true
})

const Profile = mongoose.model('Profile', profileSchema)

export {
  Profile
}
