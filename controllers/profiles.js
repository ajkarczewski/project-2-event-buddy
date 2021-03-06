import { Profile } from "../models/profile.js"

function index(req, res) {
  Profile.find({})
    .then(profiles => {
      res.render('profiles/index', {
        profiles,
        title: "Profiles"
      })
    })
    .catch(err => {
      console.log(err)
      res.redirect(`/profiles/${req.user.profile._id}`)
    })
}

function show(req, res) {
  Profile.findById(req.params.id)
    .then((profile) => {
      Profile.findById(req.user.profile._id)
        .then(self => {
          const isSelf = self._id.equals(profile._id)
          res.render("profiles/show", {
            title: `👥 ${profile.name}'s profile`,
            profile,
            isSelf,
          })
        })
    })
    .catch((err) => {
      console.log(err)
      res.redirect("/")
    })
}

function createLogEvent(req, res) {
  Profile.findById(req.user.profile._id)
    .then(profile => {
      req.body.outsideCZ = !!req.body.outsideCZ
      profile.logEvents.push(req.body)
      profile.save()
        .then(() => {
          res.redirect(`/profiles/${req.user.profile._id}`)
        })
    })
    .catch(err => {
      console.log(err)
      res.redirect(`/profiles/${req.user.profile._id}`)
    })
}

function deleteLogEvent(req, res) {
  Profile.findById(req.user.profile._id)
    .then(profile => {
      profile.logEvents.remove({ _id: req.params.id })
      profile.save()
        .then(() => {
          res.redirect(`/profiles/${req.user.profile._id}`)
        })
    })
    .catch(err => {
      console.log(err)
      res.redirect(`/profiles/${req.user.profile._id}`)
    })
}


export {
  index,
  show,
  createLogEvent,
  deleteLogEvent,
  // editLogEvent,
}
