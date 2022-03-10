import { Router } from 'express'
import * as meetUpsCtrl from '../controllers/meetUps.js'

const router = Router()

router.get('/', meetUpsCtrl.index)

export {
  router
}