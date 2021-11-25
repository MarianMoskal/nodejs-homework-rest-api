const { responseTemplate } = require('../../helpers')
const { getContactById } = require('../../model')

const getById = async (req, res) => {
  const { contactId: id } = req.params
  res.json(await responseTemplate(200, getContactById, id))
}

module.exports = getById
