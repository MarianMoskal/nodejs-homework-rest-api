const { responseTemplate } = require('../../helpers')
// const { listContacts } = require('../../model')
const { Contact } = require('../../models')

const getAll = async (req, res) => {
  const result = await Contact.find({})
  res.json(responseTemplate(200, result))
}

module.exports = getAll
