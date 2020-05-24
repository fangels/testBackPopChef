const { query, } = require('express-validator')

const loginValidation = [
  query('userName').exists(),
  query('password').exists(),
]

module.exports = {
  loginValidation,
}
