const transactionsHistoryRepository = require('../repositories/transactionsHistory')
const dynamoDB = require('../database')

const saveTransactionsHistory = async (req, res, next) => {
    const log = {
        endpoint: req.originalUrl,
        body: req.body || {},
    }

    try {
        await dynamoDB.connect()
        await transactionsHistoryRepository.createTransactionsHistory(log)
    } catch (error) {
        return res
            .status(500)
            .json({
                error: `The log couldn't be create in the database: ${error.message}`,
            })
    }

    return next()
}

module.exports = {
    saveTransactionsHistory,
}
