
const responseTemplate = (code, result) => ({
  status: 'ok',
  code,
  data: {
    result,
  }
})

module.exports = responseTemplate
