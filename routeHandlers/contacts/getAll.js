const { responseTemplate } = require('../../helpers')
const { listContacts } = require('../../model')

const getAll = async (req, res) => {
  res.json(await responseTemplate(200, listContacts))
}

module.exports = getAll
