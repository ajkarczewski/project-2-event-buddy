import { Router } from 'express'
import * as meetUpsCtrl from '../controllers/meetUps.js'
// import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

router.get('/', meetUpsCtrl.index)

export {
  router
}