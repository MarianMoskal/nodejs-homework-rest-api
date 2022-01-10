const signup = require('./signup')
const login = require('./login')
const logout = require('./logout')
const getCurrent = require('./getCurrent')
const updateAvatar = require('./updateAvatar')
const verifyEmail = require('./verifyEmail')
const postVerify = require('./postVerify')

module.exports = {
  signup,
  login,
  logout,
  getCurrent,
  updateAvatar,
  verifyEmail,
  postVerify
}
