const mongoose = require('mongoose')
const throwError = require('../../helpers')
const { Contact } = require('../../models')

const remove = async (req, res) => {
  const { contactId: id } = req.params
  if (!mongoose.isValidObjectId(id)) {
    throwError(id)
  }

  const result = await Contact.findByIdAndRemove(id)

  if (!result) {
    throwError(id)
  }

  res.json({
    status: 'ok',
    message: `contact with id: ${id} was deleted`,
    data: {
      result
    }
  })
}

module.exports = remove
