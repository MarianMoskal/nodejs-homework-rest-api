const { responseTemplate } = require('../../helpers')
const { Contact } = require('../../models')

const getAll = async (req, res) => {
  const result = await Contact.find({})
  res.json(responseTemplate(200, result))
}

module.exports = getAll
