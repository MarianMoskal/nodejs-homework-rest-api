const { Schema, model } = require('mongoose')
const Joi = require('joi')

const userSchema = Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  },
  subscription: {
    type: String,
    enum: ['starter', 'pro', 'business'],
    default: 'starter'
  },
  token: {
    type: String,
    default: null
  },
  avatarURL: {
    type: String,
    required: true
  },
  verify: {
    type: Boolean,
    default: false,
  },
  verificationToken: {
    type: String,
    required: [true, 'Verify token is required'],
  }
}, { versionKey: false, timestamps: true })

const userSignUpJoiSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
})

const userLogInJoiSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required()
})

const userVerifyEmailJoiSchema = Joi.object({
  email: Joi.string().email().required(),
})

const User = model('user', userSchema)

module.exports = {
  User,
  userSignUpJoiSchema,
  userLogInJoiSchema,
  userVerifyEmailJoiSchema
}
