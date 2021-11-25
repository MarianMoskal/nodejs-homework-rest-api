const express = require('express')
const router = express.Router()

const {
  validation,
  routeHandlerWrapper: wrapper
} = require('../../middlewares')
const contactsSchema = require('../../schemas')
const { routeHandlers: handler } = require('../../routeHandlers')

router.get('/', wrapper(handler.getAll))

router.get('/:contactId', wrapper(handler.getById))

router.post('/', validation(contactsSchema), wrapper(handler.post))

router.put('/:contactId', validation(contactsSchema), wrapper(handler.put))

router.delete('/:contactId', wrapper(handler.remove))

module.exports = router
