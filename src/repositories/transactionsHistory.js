const transactionsHistoryModel = require('../database/models/transactionsHistory')

const getTransactionsHistory = async () => {
    return await transactionsHistoryModel.scan().exec()
}

const createTransactionsHistory = async (request) => {
    if (!request) {
        throw new Error('Missing request object while creating in DB')
    }
    return await transactionsHistoryModel.create(request)
}

module.exports = {
    getTransactionsHistory,
    createTransactionsHistory,
}
