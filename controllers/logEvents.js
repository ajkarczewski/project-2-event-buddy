import { LogEvent } from '../models/logEvent.js'

function newlogEvent(req, res) {
  res.render("logEvents/new")
}

function create(req, res) {
  // convert checkbox of nothing or "on" to boolean
  req.body.outsideCZ = !!req.body.outsideCZ
  for (let key in req.body) {
    if(req.body[key] === ""){
      delete req.body[key]
    }
  }

  const logEvent = new LogEvent(req.body)
  
  logEvent.save(function(error) {
    // console.log(req.body)
    if (error) return res.redirect('logEvents/index')
    res.redirect(`/logEvents/${logEvent._id}`);
  })
}

function index(req, res){
  LogEvent.find({}, (error, logEvents) => {
    res.render('logEvents/index', {
      logEvents: logEvents,
      title: 'All logEvents',
    })
  })
}



export {
  newlogEvent as new,
  create,
  index,
  
}