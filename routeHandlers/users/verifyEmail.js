const { NotFound } = require('http-errors')
const { User } = require('../../models')

const verifyEmail = async(req, res) => {
  const { verificationToken } = req.params
  const user = await User.findOne({ verificationToken })

  if (!user) {
    throw NotFound('User not found')
  }

  await User.findByIdAndUpdate(user._id, { verify: true, verificationToken: null })

  res.json({
    status: 'ok',
    code: 200,
    body: {
      message: 'Verification successful'
    }
  })
}

module.exports = verifyEmail
