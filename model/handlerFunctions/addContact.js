const { randomUUID } = require('crypto')

const { updateJson } = require('../../helpers')
const listContacts = require('./listContacts')
const filePath = require('../filePath')

const addContact = async (body) => {
  const contacts = await listContacts()
  const newContact = { id: randomUUID(), ...body }
  const updatedContacts = [...contacts, newContact]
  await updateJson(filePath, updatedContacts)
  return newContact
}

module.exports = addContact
