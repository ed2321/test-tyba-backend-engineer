const transactionsHistory = require('../repositories/transactionsHistory')

const getTransactionsHistory = async (req, res) => {
    const response = await transactionsHistory.getTransactionsHistory()
    return res.status(200).json(response)
}

module.exports = {
    getTransactionsHistory,
}
