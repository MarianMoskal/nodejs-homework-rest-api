const { Schema, model } = require('mongoose')
const Joi = require('joi')

const contactSchema = Schema({
  name: {
    type: String,
    required: [true, 'Set name for contact'],
    minlength: 2,
    maxlength: 30,
  },
  email: {
    type: String,
    required: [true, 'Set email for contact'],
    minlength: 4,
    maxlength: 30,
  },
  phone: {
    type: String,
    required: [true, 'Set phone for contact'],
    minlength: 10,
    maxlength: 30,
  },
  favorite: {
    type: Boolean,
    default: false,
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    require: true
  }
}, { versionKey: false, timestamps: true })

const Contact = model('contact', contactSchema)

const contactsJoiSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string().required(),
  favorite: Joi.bool()
})

const favoriteJoiSchema = Joi.object({
  favorite: Joi.bool().required(),
})

module.exports = {
  Contact,
  contactsJoiSchema,
  favoriteJoiSchema
}
