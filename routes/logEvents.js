import { Router } from 'express'
import * as logEventsCtrl from '../controllers/logEvents.js'

const router = Router()

router.get('/', logEventsCtrl.index)


export {
  router
}