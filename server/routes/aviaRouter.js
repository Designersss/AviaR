const Router = require('express')
const router = new Router()

const aviaController = require('../controllers/aviaController')
const checkRole = require("../middleware/checkRoleMiddleware");

router.post('/', aviaController.create)
router.get('/', aviaController.getAll)
router.get('/:id', aviaController.getOne)

module.exports = router