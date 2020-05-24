const express = require('express')

const {
  getMe,
} = require('./controller')

const userRouterManager = express()
const userRouter = express.Router()

userRouter
  .route('/')
  .get(getMe)

userRouterManager.use('/private/user', userRouter)

module.exports = userRouterManager
