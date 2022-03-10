import { Router } from 'express'
import * as meetUpsCtrl from '../controllers/meetUps.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

router.get('/', meetUpsCtrl.index)
router.post('/', meetUpsCtrl.create)
router.get('/:id', meetUpsCtrl.show)
router.post('/', isLoggedIn, meetUpsCtrl.create)

// // PUT - localhost:300/taco/:id
// router.put("/:id", isLoggedIn, meetUpsCtrl.update)


export {
  router
}