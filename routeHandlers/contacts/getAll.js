const { BadRequest } = require('http-errors')
const isBoolean = require('node-boolify').isBoolean
const { responseTemplate } = require('../../helpers')
const { Contact } = require('../../models')

const getAll = async (req, res) => {
  const { _id } = req.user
  const { page = 1, limit = 20, favorite } = req.query

  if (!Number(page) || !Number(limit) || (favorite !== undefined && !isBoolean(favorite))) {
    throw new BadRequest('Input valid request parameters')
  }

  const skip = (page - 1) * limit

  const filter = { owner: _id }

  if (favorite !== undefined) {
    filter.favorite = favorite
  }

  const result = await Contact.find(
    filter, '', { skip, limit: Number(limit) }
  ).populate('owner', '_id name email')

  res.json(responseTemplate(200, result))
}

module.exports = getAll
