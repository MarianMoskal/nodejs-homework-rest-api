const mongoose = require('mongoose')
const { throwError } = require('../../helpers')
const { Contact } = require('../../models')

const updateFavorite = async (req, res) => {
  const { _id } = req.user
  const { body: { favorite }, params: { contactId: id } } = req

  if (!mongoose.isValidObjectId(id)) {
    throwError(id)
  }

  const result = await Contact.findOneAndUpdate({ _id: id, owner: _id }, { favorite }, { new: true })

  if (!result) {
    throwError(id)
  }

  res.json({
    status: 'ok',
    code: 200,
    data: {
      result,
    }
  })
}

module.exports = updateFavorite
