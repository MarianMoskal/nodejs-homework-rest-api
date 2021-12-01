const { removeContact } = require('../../model')

const remove = async (req, res) => {
  const { contactId: id } = req.params
  res.json({
    status: 'ok',
    message: await removeContact(id)
  })
}

module.exports = remove
