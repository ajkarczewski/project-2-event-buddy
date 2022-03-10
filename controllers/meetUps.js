import { MeetUp } from '../models/meetUp.js'

function index(req, res) {
  MeetUp.find({})
  .then(meetUps => {
    res.render('meetUps/index', {
      meetUps,
      title: "Meet Ups"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/meetUps")
  })
}

function create(req, res) {
  req.body.owner = req.user.profile._id
  MeetUp.create(req.body)
  .then(meetUp => {
    res.redirect('/meetUps')
  })
  .catch(err => {
    console.log(err)
    res.redirect('/meetUps')
  })
}

function show(req, res) {
  MeetUp.findById(req.params.id)
  .populate("owner")
  .then(meetUp => {
    res.render('meetUps/show', {
      meetUp,
      title: "🤜🤛 show"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/meetUps')
  })
}

export {
  index,
  create,
  show,
}