const Router = require('express')
const router = new Router()
const userContoller = require("../controllers/user.contoller")

router.post('/user', userContoller.createUser)
router.get('/user/:id', userContoller.getUser)
router.get('/user', userContoller.getUsers)
router.put('/user', userContoller.updateUser)
router.delete('/user/:id', userContoller.deleteUser)

module.exports = router

