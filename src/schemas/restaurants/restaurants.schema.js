const joi = require('joi')

module.exports = joi.object({
    city: joi.string().required(),
    token: joi.string(),
})
