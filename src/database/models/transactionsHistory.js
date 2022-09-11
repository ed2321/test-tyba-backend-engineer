const dynamoose = require('dynamoose')
const tableName =
    process.env.TRANSACTIONS_HISTORY_TABLE || 'transactionsHistorySchema'
const { v4: uuidv4 } = require('uuid')

const transactionsHistorySchema = new dynamoose.Schema(
    {
        id: {
            type: String,
            hashKey: true,
            default: uuidv4,
        },
        endpoint: {
            type: String,
        },
        body: {
            type: Object,
        },
    },
    {
        saveUnknown: false,
        timestamps: true,
    }
)
const transactionsHistory = dynamoose.model(
    tableName,
    transactionsHistorySchema
)

module.exports = transactionsHistory
