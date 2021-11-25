const { listContacts } = require('./handlerFunctions')
const { getContactById } = require('./handlerFunctions')
const { removeContact } = require('./handlerFunctions')
const { addContact } = require('./handlerFunctions')
const { updateContact } = require('./handlerFunctions')

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact
}
