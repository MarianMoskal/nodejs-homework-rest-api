const routeHandlersWrapper = (routeHandler) => {
  return async (req, res, next) => {
    try {
      await routeHandler(req, res, next)
    } catch (error) {
      next(error)
    }
  }
}

module.exports = routeHandlersWrapper
