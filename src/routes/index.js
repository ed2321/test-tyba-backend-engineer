const routes = require('express').Router()
const users = require('./users')
const transactionsHistory = require('./transactionsHistory')
const restaurant = require('./restaurant')

routes.use('/api/users', users)
routes.use('/api/transactionsHistory', transactionsHistory)
routes.use('/api/restaurant', restaurant)

module.exports = routes
