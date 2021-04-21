// TODO: make /users/:username or email api endpoints

const express = require('express')
const mongoose = require('mongoose')
mongoose.set('debug', true)
const base64 = require('base-64');

const { MailBox } = require('@db')

const router = express.Router()

router.route('/')
  .get(async function (req, res) {
    const { name } = req.query
    const mailbox = await MailBox.find( {name: name}).sort( { 'createdAt': -1 } )
    mailbox.map( item => item.message = base64.decode(item.message));
    res.send(mailbox)
  })

router.route('/detete')
  .get(async function (req, res) {
    try {
      await MailBox.remove({})
      res.send("success")
    } catch (err) {
      console.log(err)
    }
  })

router.route('/')
  .post(async function (req, res) {
    try {
      const { name, type, message } = req.body
      if (!message) {
        throw new Error("Please input message")
      }
      if (!name) {
        throw new Error("Please input name")
      }
      if (!type) {
        throw new Error("Please input type")
      }
      let mailbox = new MailBox({
        name,
        type,
        message
      })
      mailbox.message = base64.encode(mailbox.message);
      const mailboxRes = await mailbox.save()
      res.send(201, mailboxRes)
    } catch (err) {
      console.log(err)
    }
  })


module.exports = router
