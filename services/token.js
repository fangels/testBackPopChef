const jwt = require('jsonwebtoken')
const { jwtHash, } = require('@config/config.json')

const verify = async (token) => {
  try {
    return jwt.verify(token, jwtHash)
  } catch (e) {
    console.log(e)
    return false
  }
}

const generate = async (user) => jwt.sign(user, jwtHash)

module.exports = {
  generate,
  verify,
}
