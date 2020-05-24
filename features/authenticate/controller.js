const models = require('@models')
const httpError = require('http-errors')
const { comparePassword, } = require('@services/password')
const { generate, } = require('@services/token')

const login = async (req, res, next) => {
  try {
    const { userName, password, } = req.query
    const user = await models.User.findOne({
      where: {
        firstName: userName,
      },
    })
    if (!user) {
      return next(httpError(404, 'USER_NOT_FOUND'))
    }
    const passwordVerified = await comparePassword(password, user.password)
    if (!passwordVerified) {
      return next(httpError(404, 'BAD_PASSWORD'))
    }
    res.send(await generate({ id: user.id, }))
  } catch (e) {
    next(e)
  }
}

module.exports = {
  login,
}
