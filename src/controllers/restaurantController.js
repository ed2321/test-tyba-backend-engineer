const axios = require('axios')
const schemaRestaurant = require('../schemas/restaurants/restaurants.schema')

const searchRestaurants = async (req, res) => {
    const validationResult = schemaRestaurant.validate(req.body)
    if (validationResult.error) {
        return res.status(400).json(validationResult.error.details)
    }

    const { city } = req.body
    await axios
        .get(
            `${process.env.GOOGLE_MAPS_ENDPOINT}?query=restaurants%20in%20${city}&key=${process.env.MAPS_API_KEY}`
        )
        .then((response) => {
            return res.status(200).json(response.data.results)
        })
        .catch((error) => {
            return res
                .status(500)
                .json({ message: `We have a problem to get places`, error })
        })
}

module.exports = {
    searchRestaurants,
}
