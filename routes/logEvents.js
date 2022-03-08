import { Router } from 'express'
import * as logEventsCtrl from '../controllers/logEvents.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

// GET - localhost:3000/tacos
router.get('/', logEventsCtrl.index)
//GET /logEvents/new
router.get('/new', logEventsCtrl.new)
// POST /logEvents
router.post('/', logEventsCtrl.create)

// POST - localhost:3000/tacos
router.post('/', isLoggedIn, logEventsCtrl.create)


export {
  router
}