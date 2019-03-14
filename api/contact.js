const express = require('express')
const nodemailer = require('nodemailer')
const validator = require('validator')
const xssFilters = require('xss-filters')

const app = express()

app.use(express.json())

app.get('/', function (req, res) {
  res.status(405).json({ error: 'sorry!' })
})

app.post('/', function (req, res) {
  const attributes = ['name', 'email', 'bundesland', 'checkNl', 'checkDSGVO']
  const sanitizedAttributes = attributes.map(n => validateAndSanitize(n, req.body[n]))
  const someInvalid = sanitizedAttributes.some(r => !r)

  if (someInvalid) {
    return res.status(422).json({ 'error': 'Validation failed...' + sanitizedAttributes })
  }

  sendMail(...sanitizedAttributes)
  res.status(200).json({ 'message': 'Success' })
})
module.exports = {
  path: '/api/contact',
  handler: app
}

const validateAndSanitize = (key, value) => {
  const rejectFunctions = {
    name: v => v.length < 4,
    email: v => !validator.isEmail(v),
    bundesland: v => v.length < 0,
    checkNl: v => false,
    checkDSGVO: v => false
  }

  // If object has key and function returns false, return sanitized input. Else, return false
  return rejectFunctions.hasOwnProperty(key) && !rejectFunctions[key](value) && xssFilters.inHTMLData(value)
}

const sendMail = (name, email, bundesland, checkDSGVO, checkNl) => {
  const transporter = nodemailer.createTransport({
    sendmail: true,
    newline: 'unix',
    path: '/usr/sbin/sendmail'
  })
  transporter.sendMail({
    from: email,
    to: 'office@macherjek.at',
    subject: 'New bikeit.at contact form message',
    text: `Von: ${email}; Name: ${name}; Bundesland: ${bundesland}; DSGVO: ${checkDSGVO}; NL: ${checkNl}`
  })
}
