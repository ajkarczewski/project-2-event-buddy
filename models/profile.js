import mongoose from 'mongoose'

const logEventSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Field is required']
  },
  location: {
    type: String,
    required: [true, 'Field is required']
  },
  date: Date,
  eventType: {
    type: String,
    enum: ["Art/Culture", "Nature", "Food", "Work", "Misc"]
  },
  rating: {
    type: String,
    enum: ["I had a blast!", "Meh", "Snoozefest"]
  },
  entry: {
    type: String,
    // required: [true, 'Field is required']
  }, 
  outsideCZ: Boolean,
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
