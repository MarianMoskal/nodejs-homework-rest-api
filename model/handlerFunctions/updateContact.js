const createError = require('http-errors')
const filePath = require('../filePath')
const { updateJson } = require('../../helpers')
const listContacts = require('./listContacts')

const updateContact = async (id, body) => {
  const contacts = await listContacts()
  const idx = contacts.findIndex(item => item.id === id)
  if (idx === -1) {
    throw createError(404, `No contact with id: ${id} found.`)
  }
  contacts[idx] = { id, ...body }
  await updateJson(filePath, contacts)
  return contacts[idx]
}

module.exports = updateContact
