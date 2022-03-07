import { Router } from 'express'
import * as logEventsCtrl from '../controllers/logEvents.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

router.post('/', isLoggedIn, logEventsCtrl.create)

router.get('/', logEventsCtrl.index)

router.get("/new", logEventsCtrl.new)

router.post('/', logEventsCtrl.create)


export {
  router
}