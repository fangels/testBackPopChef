const express = require('express')
const { tokenCatcher, } = require('@middlewares/tokenCatcher')
const { checkAuthenticate, } = require('@middlewares/firewall')
const authenticationRouter = require('@features/authenticate/routes')
const userRouter = require('@features/user/routes')
const productsRouter = require('@features/products/routes')

const routerManager = express()

routerManager.options('/*', (_, res) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  )
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH')
  res.sendStatus(200)
})

routerManager.use('/', tokenCatcher)

routerManager.use('/private', checkAuthenticate)

routerManager.use(authenticationRouter)
routerManager.use(userRouter)
routerManager.use(productsRouter)

module.exports = routerManager
