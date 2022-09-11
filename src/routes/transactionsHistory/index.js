const transactionsHistory = require('express').Router()

const {
    getTransactionsHistory,
} = require('../../controllers/transactionsHistoryController')
const {
    saveTransactionsHistory,
} = require('../../middleware/transactionsHistory')

transactionsHistory.get('/', saveTransactionsHistory, getTransactionsHistory)

module.exports = transactionsHistory
