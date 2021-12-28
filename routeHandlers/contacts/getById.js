const mongoose = require('mongoose')
const { throwError } = require('../../helpers')
const { Contact } = require('../../models')
const { responseTemplate } = require('../../helpers')

const getById = async (req, res) => {
  const { _id } = req.user
  const { contactId: id } = req.params

  if (!mongoose.isValidObjectId(id)) {
    throwError(id)
  }

  const data = await Contact.findById(id)

  if (!data || data.owner.toString() !== _id.toString()) {
    throwError(id)
  }

  res.json(responseTemplate(200, data))
}

module.exports = getById
