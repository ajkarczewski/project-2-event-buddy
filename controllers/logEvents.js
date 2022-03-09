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
  LogEvent.create(req.body)
  .then(()=> {
    res.redirect('/logEvents')
  })
}

  //   const logEvent = new LogEvent(req.body)

  //   logEvent.save(function(error) {
  //     // console.log(req.body)
  //     if (error) return res.redirect('logEvents/index')
  //     res.redirect(`/logEvents/${logEvent._id}`);
  //   })
  // }

  // function index(req, res){
  //   LogEvent.find({}, (error, logEvents) => {
  //     res.render('logEvents/index', {
  //       logEvents: logEvents,
  //       title: 'All logEvents',
  //     })
  //   })
  // }



  export {
    index,
    create,
    newlogEvent as new,
  }