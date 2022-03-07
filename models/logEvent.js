import mongoose from "mongoose"

const Schema = mongoose.Schema

const logEventSchema = new Schema ({
  name: String,
  location: String,
  date: Date,
  eventType: {
    type: String,
    enum: ["Art/Culture", "Nature", "Food", "Work", "Misc"]
  },
  rating: {
    type: String,
    enum: ["I had a blast!", "Meh", "Snooze fest"]
  },
  outsideCZ: Boolean,
  owner: {
    type: Schema.Types.ObjectId, ref: "Profile"},
  entry: String
})

const LogEvent = mongoose.model("LogEvent", logEventSchema)

export {
  LogEvent
}