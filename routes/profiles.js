import { Router } from 'express'
import { isLoggedIn } from '../middleware/middleware.js'
import * as profilesCtrl from "../controllers/profiles.js"

const router = Router()

router.get('/', isLoggedIn, profilesCtrl.index)
router.get('/:id', isLoggedIn, profilesCtrl.show)
router.get('/logEvents/:id', isLoggedIn, profilesCtrl.show)
router.post("/:id/logEvents", isLoggedIn, profilesCtrl.createLogEvent)

router.delete('/logEvents/:id', isLoggedIn, profilesCtrl.deleteLogEvent)

export {
  router
}