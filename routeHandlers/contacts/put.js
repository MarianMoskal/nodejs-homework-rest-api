const mongoose = require('mongoose')
const { throwError } = require('../../helpers')
const { Contact } = require('../../models')
const { responseTemplate } = require('../../helpers')

const put = async (req, res) => {
  const { _id } = req.user
  const { body, params: { contactId: id } } = req
  if (!mongoose.isValidObjectId(id)) {
    throwError(id)
  }

  const contact = await Contact.findById(id)

  if (contact.owner.toString() !== _id.toString()) {
    throwError(id)
  }

  const result = await Contact.findByIdAndUpdate(id, body, { new: true })

  if (!result) {
    throwError(id)
  }

  res.json(responseTemplate(200, result))
}

module.exports = put
