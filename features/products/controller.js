const models = require('@models')

const getAll = async (req, res, next) => {
  try {
    const products = await models.Product.findAll()

    res.send(products)
  } catch (e) {
    next(e)
  }
}

const getProduct = async (req, res, next) => {
  try {
    const { id, } = req.query

    const product = await models.Product.findByPk(id)

    res.send(product)
  } catch (error) {
    next(error)
  }
}

const createProduct = async (req, res, next) => {
  try {
    const { title, description, nbInStock, } = req.body

    const product = await models.Product.create({
      title,
      description,
      nbInStock,
    })

    res.send(product)
  } catch (error) {
    next(error)
  }
}

const updateProduct = async (req, res, next) => {
  try {
    const { id, title, description, nbInStock, } = req.body

    const product = await models.Product.findByPk(id)

    await product.update({
      title: title || product.title,
      description: description || product.description,
      nbInStock: nbInStock || product.nbInStock,
    })

    res.send(product)
  } catch (error) {
    next(error)
  }
}

const deleteProduct = async (req, res, next) => {
  try {
    const { id, } = req.query

    const product = await models.Product.findByPk(id)

    await product.delete()

    res.send()
  } catch (error) {
    next(error)
  }
}

module.exports = {
  getAll,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
}
