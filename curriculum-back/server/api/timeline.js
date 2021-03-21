// TODO: make /users/:username or email api endpoints

const express = require('express')
const mongoose = require('mongoose')
mongoose.set('debug', true)

const { Timeline } = require('@db')

const router = express.Router()

router.route('/')
  .get(async function (req, res) {
    const timeline = await Timeline.findAll();
    res.send(timeline)
  })

router.route('/')
  .post(async function (req, res) {
    try {
      const { time, title, content, image } = req.body;
      console.log("abczxc", time, title, content, image);
      const timeline = new Timeline({
        time,
        title,
        content,
        image
      })
      console.log("timeline", timeline)
      const timelineRes = await timeline.save()
      res.send(201, timelineRes)
    } catch (err) {
      console.log(err)
    }
  })

module.exports = router
