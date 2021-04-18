const express = require('express')
const router = express.Router()

const authMiddleware = require('../middleware/auth')

const { curricula, authCurricula } = require('./curricula')
const count = require('./count')
const auth = require('./auth')
const users = require('./users')
const timeline = require('./timeline')
const mailbox = require('./mailbox')

router.use('/curricula', curricula)
router.use('/curricula', authMiddleware, authCurricula)
router.use('/count', count)
router.use('/auth', auth)
router.use('/users', authMiddleware, users)
router.use('/timeline', timeline)
router.use('/mailbox', mailbox)

module.exports = router
