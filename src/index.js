require('dotenv').config({ path: '../.env' })
const express = require('express')
const cors = require('cors')
const app = express()
const { HOST, PORT } = process.env

// middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

// Routes
// app.use(require("./src/routes/users"));
// app.use(require("./src/routes/geolocation"));
// app.use(require("./src/routes/logs"));

app.get('/', (_req, res) => {
    res.send('Hello, world!!')
})

app.listen(PORT, HOST)
console.log(`Running on http://${HOST}:${PORT}`)
