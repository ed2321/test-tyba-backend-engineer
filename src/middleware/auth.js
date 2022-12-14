const jwt = require('jsonwebtoken')
const authRepository = require('../repositories/auth')

const verifyToken = async (req, res, next) => {
    const token =
        req.body.token || req.query.token || req.headers['x-access-token']

    if (!token) {
        return res.status(403).send('token required to authenticate.')
    }

    const auth = await authRepository.getLogout(token)
    if (auth) {
        return res.status(400).json({ error: `the token has expired.` })
    }

    try {
        const decoded = jwt.verify(token, process.env.TOKEN_KEY)
        req.user = decoded
    } catch (err) {
        return res.status(401).send('Invalid Token')
    }
    return next()
}

module.exports = {
    verifyToken,
}
