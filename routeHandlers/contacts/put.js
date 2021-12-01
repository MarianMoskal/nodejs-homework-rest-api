const { responseTemplate } = require('../../helpers')
const { updateContact } = require('../../model')

const put = async (req, res) => {
  const { body, params: { contactId } } = req
  res.json(await responseTemplate(200, updateContact, contactId, body))
}

module.exports = put
