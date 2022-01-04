const { Conflict } = require('http-errors')
const gravatar = require('gravatar')
const bcrypt = require('bcryptjs')
const { User } = require('../../models')
const responseTemplate = require('../../helpers/responseTemplate')

const signup = async (req, res) => {
  const { name, email, password, subscription = 'starter' } = req.body
  const user = await User.findOne({ email })

  if (user) {
    throw new Conflict(`User with email ${email} already exist`)
  }

  const avatarURL = gravatar.url(email, { protocol: 'https' })

  const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(11))

  await User.create({ name, email, avatarURL, password: hashPassword, subscription })

  res.json(responseTemplate(201, {
    user: {
      email,
      subscription,
      avatarURL
    }
  }))
}

module.exports = signup
