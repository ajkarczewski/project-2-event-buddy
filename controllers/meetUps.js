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

export {
  index,
}