require('dotenv').config()

const mongoUrl = process.env.MONGO_URL
const mongoPort = process.env.MONGO_PORT
const mongoDb = process.env.MONGO_DB

const mongoOptions = {
    user: process.env.MONGO_USERNAME,
    pass: process.env.MONGO_PASSWORD
  }

module.exports = {
  url: `mongodb://${mongoUrl}:${mongoPort}/${mongoDb}`
}
