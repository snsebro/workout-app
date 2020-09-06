const db = require('../db/connection')
const Workout = require('../models/workout')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  await Workout.deleteMany()
  const workouts =
    [
      {
        "name": "Pistol Squats",
        "directions": ["Begin in a squat stance", "Slowly lower yourself down on one leg while maintaining balance", "Keep opposite leg extended in front"]
      },
      {
        "name": "Goblet Squats",
        "directions": ["Begin in a squat stance", "Slowly lower yourself down on both legs", "Keep weight close to chest"]
      }
    ]
  
    await Workout.insertMany(workouts)
    console.log("Created workouts")
}

const run = async () => {
  await main()
  db.close
}

run()
