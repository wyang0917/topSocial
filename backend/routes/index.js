const express = require('express')
const profileRouter = require('./profile')
const messageRouter = require('./message')

//create router
const router = express.Router()

router.use('/profile',profileRouter)
router.use('/message',messageRouter)

module.exports = router