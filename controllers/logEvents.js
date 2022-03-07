import { LogEvent } from '../models/logEvent.js'

function newlogEvent(req, res) {
  res.render("logEvents/new")
}

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

function create(req, res) {
  req.body.owner = req.user.profile._id
	req.body.outsideCZ = !!req.body.outsideCZ
  LogEvent.create(req.body)
  .then(logEvent => {
    res.redirect('/logEvents')
  })
  .catch(err => {
    console.log(err)
    res.redirect('/logEvents')
  })
}

export {
  newlogEvent as new,
  create,
  index
}