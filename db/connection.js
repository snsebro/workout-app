const MONGO_SERCURE = require('../env')
const mongoose = require('mongoose')

let MONGODB_URI = process.env.PROD_MONGODB || MONGO_SERCURE

mongoose
  .connect(MONGODB_URI, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => console.log('Successfully connected to MongoDB'))
  .catch(error => console.error('Connection error', error.message))
module.exports = mongoose.connection
