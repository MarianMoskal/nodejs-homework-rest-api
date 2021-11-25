const { responseTemplate } = require('../../helpers')
const { addContact } = require('../../model')

const post = async (req, res) => {
  res.status(201).json(await responseTemplate(201, addContact, req.body))
}

module.exports = post
