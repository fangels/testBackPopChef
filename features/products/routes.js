const express = require('express')
const { validateParams, } = require('@middlewares/validator')

const {
  getAll,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require('./controller')
const {
  getValidation,
  createValidation,
  updateValidation,
  deleteValidation,
} = require('./validation')

const productsRouterManager = express()
const productsRouter = express.Router()

productsRouter
  .route('/')
  .get(getValidation, validateParams, getProduct)
  .create(createValidation, validateParams, createProduct)
  .update(updateValidation, validateParams, updateProduct)
  .delete(deleteValidation, validateParams, deleteProduct)

productsRouter
  .route('/all')
  .get(getAll)

productsRouterManager.use('/private/products', productsRouter)

module.exports = productsRouterManager
