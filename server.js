const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const logger = require('morgan')

const db = require('./db/connection')
const PORT = process.env.PORT || 3000

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(logger('dev'))

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.listen(PORT, ()=> (`Listening on port: ${PORT}`))