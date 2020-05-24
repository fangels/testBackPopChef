const express = require('express')
const { validateParams, } = require('@middlewares/validator')

const {
  login,
} = require('./controller')
const {
  loginValidation,
} = require('./validation')
const loginRouterManager = express()
const loginRouter = express.Router()

loginRouter
  .route('/')
  .get(loginValidation, validateParams, login)

loginRouterManager.use('/auth', loginRouter)

module.exports = loginRouterManager
