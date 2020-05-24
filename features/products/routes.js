const express = require('express')

const {
  getAll,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require('./controller')

const productsRouterManager = express()
const productsRouter = express.Router()

productsRouter
  .route('/')
  .get(getProduct)
  .create(createProduct)
  .update(updateProduct)
  .delete(deleteProduct)

productsRouter
  .route('/all')
  .get(getAll)

productsRouterManager.use('/private/products', productsRouter)

module.exports = productsRouterManager
