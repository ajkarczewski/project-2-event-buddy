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

function edit(req, res) {
  MeetUp.findById(req.params.id)
  .then(meetUp => {
    res.render('meetUps/edit', {
      meetUp,
      title: "edit ✏️"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/meetUps')
  })
}

function update(req, res) {
  MeetUp.findById(req.params.id)
  .then(meetUp => {
    if (meetUp.owner.equals(req.user.profile._id)) {
      meetUp.updateOne(req.body, {new: true})
      .then(()=> {
        res.redirect(`/meetUps/${meetUp._id}`)
      })
    } else {
      throw new Error ('🚫 Not authorized 🚫')
    }
  })
  .catch(err => {
    console.log(err)
    res.redirect('/meetUps')
  })
}

function deleteMeetUp(req, res) {
  MeetUp.findById(req.params.id)
  .then(meetUp => {
    if (meetUp.owner.equals(req.user.profile._id)) {
      meetUp.delete()
      .then(() => {
        res.redirect('/meetUps')
      })
    } else {
      throw new Error ('🚫 Not authorized 🚫')
    }   
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
  edit,
  update,
  deleteMeetUp as delete
}
