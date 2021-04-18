const mongoose = require('mongoose')

const MailBoxSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  }
}, { timestamps: true })

const MailBox = mongoose.model('MailBox', MailBoxSchema)

module.exports = MailBox

