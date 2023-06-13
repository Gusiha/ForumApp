const Router = require('express')
const router = new Router()
const postContoller = require("../controllers/post.contoller")

router.post('/post', postContoller.createPost)
router.get('/post/:id', postContoller.getPost)
router.get('/post', postContoller.getPost)
router.put('/post', postContoller.updatePost)
router.delete('/post/:id', postContoller.deletePost)

module.exports = router

