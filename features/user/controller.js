
const getMe = async (req, res, next) => {
  try {
    res.send(req.user)
  } catch (e) {
    next(e)
  }
}

module.exports = {
  getMe,
}
