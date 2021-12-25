const express = require('express')
const router = express.Router()

const {
  auth,
  validation,
  routeHandlerWrapper: wrapper
} = require('../../middlewares')
const { contactsJoiSchema: schema, favoriteJoiSchema } = require('../../models')
const { routeHandlers: handlers } = require('../../routeHandlers')

router.get('/', auth, wrapper(handlers.getAll))

router.get('/:contactId', wrapper(handlers.getById))

router.post('/', auth, validation(schema), wrapper(handlers.post))

router.put('/:contactId', validation(schema), wrapper(handlers.put))

router.patch('/:contactId/favorite', validation(favoriteJoiSchema), wrapper(handlers.updateFavorite))

router.delete('/:contactId', wrapper(handlers.remove))

module.exports = router
