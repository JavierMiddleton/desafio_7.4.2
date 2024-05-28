const express = require('express')
const routes = require('./routes/index')
const cors = require('cors')

const app = express()

//middlewares
app.use(cors())
app.use(express.json())

//routes
app.use('/', routes)


module.exports = app