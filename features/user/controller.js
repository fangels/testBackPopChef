
const getMe = async (req, res, next) => {
  try {
    console.log(req.user)
    res.send(req.user)
  } catch (e) {
    next(e)
  }
}

module.exports = {
  getMe,
}
