const mongoose = require('mongoose')
const throwError = require('../../helpers')
const { Contact } = require('../../models')
const { responseTemplate } = require('../../helpers')

const put = async (req, res) => {
  const { body, params: { contactId: id } } = req
  if (!mongoose.isValidObjectId(id)) {
    throwError(id)
  }
  const result = await Contact.findByIdAndUpdate(id, body, { new: true })
  if (!result) {
    throwError(id)
  }
  res.json(responseTemplate(200, result))
}

module.exports = put
