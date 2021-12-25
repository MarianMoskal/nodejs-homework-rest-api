const { responseTemplate } = require('../../helpers')

const getCurrent = async (req, res) => {
  const { name, email } = req.user

  res.json(responseTemplate(200, {
    user: {
      name,
      email
    }
  }))
}

module.exports = getCurrent
