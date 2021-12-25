const express = require('express')
const { usersHandlers: handlers } = require('../../routeHandlers')

const {
  auth,
  validation,
  routeHandlerWrapper: wrapper
} = require('../../middlewares')

const {
  userSignUpJoiSchema: signUpSchema,
  userLogInJoiSchema: logInSchema
} = require('../../models')

const router = express.Router()

router.post('/signup', validation(signUpSchema), wrapper(handlers.signup))

router.post('/login', validation(logInSchema), wrapper(handlers.login))

router.get('/current', auth, wrapper(handlers.getCurrent))

router.get('/logout', auth, wrapper(handlers.logout))

module.exports = router
