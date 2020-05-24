const bcrypt = require('bcrypt')

const generatePassword = async (password) => bcrypt.hashSync(password, 13)

const comparePassword = async (password, passwordHash) => bcrypt.compareSync(password, passwordHash)

module.exports = {
  generatePassword,
  comparePassword,
}
