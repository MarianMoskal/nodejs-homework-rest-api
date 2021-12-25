const { responseTemplate } = require('../../helpers')
const { Contact } = require('../../models')

const getAll = async (req, res) => {
  const { _id } = req.user
  const { page = 1, limit = 20, favorite } = req.query

  const skip = (page - 1) * limit

  const result = await Contact.find(
    { owner: _id }, '', { skip, limit: Number(limit) }
  ).populate('owner', '_id name email')

  if (favorite === 'true' || favorite === 'false') {
    const filteredResult = result.filter(i => `${i.favorite}` === favorite)
    return res.json(responseTemplate(200, filteredResult))
  }

  res.json(responseTemplate(200, result))
}

module.exports = getAll
