import { Router } from 'express'
import * as logEventsCtrl from '../controllers/logEvents.js'
import { isLoggedIn } from '../middleware/middleware.js'
const router = Router()


router.get('/', logEventsCtrl.index)
router.get('/new', logEventsCtrl.new)
router.get('/:id', logEventsCtrl.show)
router.get('/:id/edit', logEventsCtrl.edit)
router.post('/', logEventsCtrl.create)

// router.post('/', isLoggedIn, logEventsCtrl.create)


export {
  router
}