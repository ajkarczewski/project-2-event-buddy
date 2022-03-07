import { LogEvent } from '../models/logEvent.js'

function index(req, res) {
  LogEvent.find({})
  .then(logEvents => {
    res.render('logEvents/index', {
      logEvents,
      title: "📝"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/logEvents")
  })
}

export {
  index
}