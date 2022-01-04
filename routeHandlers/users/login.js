const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { Unauthorized } = require('http-errors')
const { User } = require('../../models')
const responseTemplate = require('../../helpers/responseTemplate')

const { SECRET_KEY } = process.env

const login = async (req, res) => {
  const { email, password } = req.body
  const user = await User.findOne({ email })

  if (!user) {
    throw new Unauthorized('Email or password is wrong')
  }

  const passCompare = bcrypt.compareSync(password, user.password)

  if (!passCompare) {
    throw new Unauthorized('Email or password is wrong')
  }

  const payload = { id: user._id }
  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '2h' })

  await User.findByIdAndUpdate(user._id, { token })

  res.json(responseTemplate(200, {
    token,
    user: {
      email,
      subscription: 'starter'
    },
  }))
}

module.exports = login
