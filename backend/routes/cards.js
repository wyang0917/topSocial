const express = require('express')
const { getCardById,postCard,deleteCardById } = require('../controllers/cardsController')

const cardsRouter = express.Router()

// GET /api/cards?id=1
cardsRouter.get('/',getCardById)

//POST /api/cards post a card 
cardsRouter.post('/',postCard)

//DELETE /api/cards/:card_id(:card_id是动态参数)
cardsRouter.delete('/:card_id',deleteCardById)
module.exports = cardsRouter
