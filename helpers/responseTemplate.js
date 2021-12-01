const responseTemplate = async (code, func, ...args) => ({
  status: 'ok',
  code,
  data: {
    result: await func(...args)
  }
})

module.exports = responseTemplate
