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

router.get('/:contactId', auth, wrapper(handlers.getById))

router.post('/', auth, validation(schema), wrapper(handlers.post))

router.put('/:contactId', auth, validation(schema), wrapper(handlers.put))

router.patch('/:contactId/favorite', auth, validation(favoriteJoiSchema), wrapper(handlers.updateFavorite))

router.delete('/:contactId', auth, wrapper(handlers.remove))

module.exports = router
