require('dotenv').config();
const express = require('express');
const dbConnection = require('./db.js');
const userRouter = require('./routes/user.routes')
const postRouter = require('./routes/post.routes')
const PORT = process.env.PORT

const app = express()
app.use(express.json())
app.use('/api', userRouter)
app.use('/api', postRouter)


app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
