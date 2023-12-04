const express = require('express')
const profileRouter = express.Router()
const axios = require('axios')
const { getProfile } = require('../controllers/profileController')


profileRouter.get('/',getProfile)
module.exports = profileRouter 

