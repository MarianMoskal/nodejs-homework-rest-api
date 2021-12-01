const { writeFile } = require('fs/promises')

const updateJson = async (path, contacts) => {
  await writeFile(path, JSON.stringify(contacts))
}

module.exports = updateJson
