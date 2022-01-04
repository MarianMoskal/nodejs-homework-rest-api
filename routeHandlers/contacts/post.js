const { Contact } = require('../../models')
const { responseTemplate } = require('../../helpers')

const post = async (req, res) => {
  const { _id } = req.user
  const result = await Contact.create({ ...req.body, owner: _id })
  res.status(201).json(responseTemplate(201, result))
}

module.exports = post
