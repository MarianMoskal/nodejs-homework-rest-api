const { responseTemplate } = require('../../helpers')
const { listContacts } = require('../../model')

const getAll = async (_, res) => {
  await res.json(await responseTemplate(200, listContacts))
}

module.exports = getAll
