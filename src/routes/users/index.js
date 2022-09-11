const users = require('express').Router()
const { verifyToken } = require('../../middleware/auth')
const {
    saveTransactionsHistory,
} = require('../../middleware/transactionsHistory')
const {
    registerUser,
    loginUser,
    logoutUser,
} = require('../../controllers/userController')

users.post('/register', saveTransactionsHistory, registerUser)
users.post('/login', saveTransactionsHistory, loginUser)
users.post('/logout', saveTransactionsHistory, verifyToken, logoutUser)

module.exports = users
