const express = require('express')
const router = express.Router()

const {
  validation,
  routeHandlerWrapper: wrapper
} = require('../../middlewares')
const { contactsJoiSchema: schema, favoriteJoiSchema } = require('../../models')
const { routeHandlers: handler } = require('../../routeHandlers')

router.get('/', wrapper(handler.getAll))

router.get('/:contactId', wrapper(handler.getById))

router.post('/', validation(schema), wrapper(handler.post))

router.put('/:contactId', validation(schema), wrapper(handler.put))

router.patch('/:contactId/favorite', validation(favoriteJoiSchema), wrapper(handler.updateFavorite))

router.delete('/:contactId', wrapper(handler.remove))

module.exports = router
