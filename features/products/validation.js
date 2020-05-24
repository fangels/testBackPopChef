const { query, body, } = require('express-validator')

const getValidation = [
  query('id').isNumeric().exists(),
]

const createValidation = [
  body('title').isString().exists(),
  body('description').isString().exists(),
  body('nbInStock').isNumeric().exists(),
]

const updateValidation = [
  body('title').isString(),
  body('description').isString(),
  body('nbInStock').isNumeric(),
]

const deleteValidation = [
  body('id').isNumeric().exists(),
]

module.exports = {
  getValidation,
  createValidation,
  updateValidation,
  deleteValidation,
}
