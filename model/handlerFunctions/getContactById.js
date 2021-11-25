const createError = require('http-errors')
const listContacts = require('./listContacts')

const getContactById = async (contactId) => {
  const data = await listContacts()
  for (const el of data) {
    if (`${el.id}` === contactId) {
      return el
    }
  }
  throw createError(404, `No contact with id: ${contactId} found.`)
}

module.exports = getContactById
