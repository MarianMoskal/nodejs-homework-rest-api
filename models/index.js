const { Contact, contactsJoiSchema, favoriteJoiSchema } = require('./contact')
const { User, userSignUpJoiSchema, userLogInJoiSchema } = require('./user')

module.exports = {
  Contact,
  contactsJoiSchema,
  favoriteJoiSchema,
  User,
  userSignUpJoiSchema,
  userLogInJoiSchema
}
