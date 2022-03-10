import { LogEvent } from '../models/logEvent.js'

function index(req, res) {
  LogEvent.find({})
  .then(logEvents => {
    res.render('logEvents/index',{
    logEvents,
    title: "Logged Events:"
    })
  })
}

function newlogEvent(req, res) {
  res.render('logEvents/new', {
    title: "Log New Event"
  })
}

function create(req, res) {
  req.body.outsideCZ = !!req.body.outsideCZ
  // do i need this in in create and update^
  LogEvent.create(req.body)
  .then(()=> {
    res.redirect('/logEvents')
  })
}

function show(req, res) {
  LogEvent.findById(req.params.id)
  .then(logEvent => {
    res.render('logEvents/show', {
      logEvent,
      title: "Event details"
    })
  })
}

function edit(req, res) {
  LogEvent.findById(req.params.id)
  .then(logEvent => {
    res.render('logEvents/edit', {
      logEvent,
      title: "Edit Event"
    })
  })
}

function update(req, res) {
  req.body.outsideCZ = !!req.body.outsideCZ
  LogEvent.findByIdAndUpdate(req.params.id, req.body, {new: true})
  .then(() => {
    res.redirect('/logEvents')
  })
}

function deleteLogEvent(req, res) {
  LogEvent.findByIdAndDelete(req.params.id)
  .then(() => {
    res.redirect('/logEvents')
  })
}

  export {
    deleteLogEvent as delete,
    update,
    edit,
    show,
    index,
    create,
    newlogEvent as new,
  }
  