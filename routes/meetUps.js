import { Router } from 'express'
import * as meetUpsCtrl from '../controllers/meetUps.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

router.get('/', meetUpsCtrl.index)
router.post('/', meetUpsCtrl.create)
router.get('/:id', meetUpsCtrl.show)
router.post('/', isLoggedIn, meetUpsCtrl.create)
router.get("/:id/edit", isLoggedIn, meetUpsCtrl.edit)
router.put('/:id', isLoggedIn, meetUpsCtrl.update)
router.delete('/:id', isLoggedIn, meetUpsCtrl.delete)


export {
  router
}