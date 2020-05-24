const models = require('@models')
const { verify, } = require('@services/token')

const tokenCatcher = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1]
    if (token) {
      req.token = await verify(token)
      req.user = await models.User.findByPk(req.token.id)
      return next()
    } else {
      req.token = false
      next()
    }
  } catch (error) {
    req.token = false
    next()
  }
}

module.exports = {
  tokenCatcher,
}
