const express = require('express')
const profileRouter = require('./profile')
const messageRouter = require('./message')
const highlineRouter = require('./highline')
const requestRouter = require('./request')
const cardsRouter = require('./cards')

//create router
const router = express.Router()

router.use('/profile',profileRouter)
router.use('/message',messageRouter)
router.use('/highline',highlineRouter)
router.use('/request',requestRouter)
router.use('/cards',cardsRouter)

module.exports = router