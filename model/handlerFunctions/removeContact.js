const createError = require('http-errors')

const filePath = require('../filePath')
const listContacts = require('./listContacts')
const { updateJson } = require('../../helpers')

const removeContact = async (id) => {
  const contacts = await listContacts()
  const idx = contacts.findIndex(item => `${item.id}` === `${id}`)
  if (idx === -1) {
    throw createError(404, `No contact with id: ${id} found.`)
  }
  contacts.splice(idx, 1)
  await updateJson(filePath, contacts)
  return `contact with id: ${id} deleted`
}

module.exports = removeContact
