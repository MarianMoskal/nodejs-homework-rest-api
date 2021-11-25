const { readFile } = require('fs/promises')
const createError = require('http-errors')
const filePath = require('../filePath')

const listContacts = async () => {
  const data = await readFile(filePath, 'utf-8')
  if (!data) {
    throw createError(404, 'Not found')
  }
  return await JSON.parse(data)
}

module.exports = listContacts
