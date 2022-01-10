const { Conflict } = require('http-errors')
const gravatar = require('gravatar')
const { nanoid } = require('nanoid')
const bcrypt = require('bcryptjs')
const { User } = require('../../models')
const { responseTemplate, sendEmail } = require('../../helpers')

const signup = async (req, res) => {
  const { name, email, password, subscription = 'starter' } = req.body
  const user = await User.findOne({ email })

  if (user) {
    throw new Conflict(`User with email ${email} already exist`)
  }

  const verificationToken = nanoid()

  const avatarURL = gravatar.url(email, { protocol: 'https' })

  const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(11))

  await User.create({ name, email, avatarURL, password: hashPassword, subscription, verificationToken })

  const mail = {
    to: email,
    subject: 'Email verification',
    html: `<a target='_blank' href='http://localhost:3000/api/users/verify/${verificationToken}'>Verify your email</a>`
  }

  await sendEmail(mail)

  res.json(responseTemplate(201, {
    user: {
      email,
      subscription,
      avatarURL,
      verificationToken
    }
  }))
}

module.exports = signup
