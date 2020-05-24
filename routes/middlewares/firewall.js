const httpError = require('http-errors')

const checkAuthenticate = async (req, res, next) => {
  try {
    if (!req.token) {
      return next(httpError(401, 'NO_OR_WRONG_TOKEN_PROVIDED'))
    }
    next()
  } catch (e) {
    next(e)
  }
}

module.exports = {
  checkAuthenticate,
}
