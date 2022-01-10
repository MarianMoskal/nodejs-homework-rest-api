const sgMail = require('@sendgrid/mail')
require('dotenv').config()

const { SENDGRID_API_KEY, EMAIL } = process.env

sgMail.setApiKey(SENDGRID_API_KEY)

const sendEmail = (data) => {
  const email = { ...data, from: EMAIL }
  return sgMail.send(email)
    .then(() => { return true })
    .catch(err => { throw err })
}

module.exports = sendEmail
