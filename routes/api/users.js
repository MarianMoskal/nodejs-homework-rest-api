const express = require('express')
const { usersHandlers: handlers } = require('../../routeHandlers')

const {
  auth,
  validation,
  upload,
  routeHandlerWrapper: wrapper
} = require('../../middlewares')

const {
  userSignUpJoiSchema: signUpSchema,
  userLogInJoiSchema: logInSchema,
  userVerifyEmailJoiSchema: emailSchema
} = require('../../models')

const router = express.Router()

router.post('/signup', validation(signUpSchema), wrapper(handlers.signup))

router.post('/login', validation(logInSchema), wrapper(handlers.login))

router.get('/current', auth, wrapper(handlers.getCurrent))

router.get('/logout', auth, wrapper(handlers.logout))

router.patch('/avatars', auth, upload.single('avatar'), wrapper(handlers.updateAvatar))

router.get('/verify/:verificationToken', wrapper(handlers.verifyEmail))

router.post('/verify', validation(emailSchema), wrapper(handlers.postVerify))

module.exports = router
