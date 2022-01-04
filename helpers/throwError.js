const createError = require('http-errors')

const throwError = (id) => {
  throw createError(404, `Contact with id: ${id} not found.`)
}

module.exports = throwError
