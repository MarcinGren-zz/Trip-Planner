require('dotenv').config({path: __dirname + '/../.env'})

module.exports = {
  httpServer: {
    port: process.env.PORT
  }
}