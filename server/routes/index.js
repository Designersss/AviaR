const Router = require('express')
const router = new Router()

const aviaRouter = require('./aviaRouter')
const typeRouter = require('./typeRouter')
const userRouter = require('./userRouter')

router.use('/user', userRouter)
router.use('/type', typeRouter)
router.use('/avia', aviaRouter)

module.exports = router