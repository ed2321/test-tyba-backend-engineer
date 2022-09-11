const restaurant = require('express').Router()
const { verifyToken } = require('../../middleware/auth')
const {
    saveTransactionsHistory,
} = require('../../middleware/transactionsHistory')

const { searchRestaurants } = require('../../controllers/restaurantController')

restaurant.get('/', saveTransactionsHistory, verifyToken, searchRestaurants)

module.exports = restaurant
