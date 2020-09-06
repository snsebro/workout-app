const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Workout = new Schema(
  {
    name: { type: String, required: true },
    directions: {type: Array, required: true}
  }
)

module.exports = mongoose.model('workout', Workout)