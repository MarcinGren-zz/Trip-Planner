const express = require('express')
const path = require('path')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const config = require('../webpack.config')

const compiler = webpack(config)

class Server {
  constructor(Config) {
    this.config = Config
  }

  initServer() {
    this.app = express()
    // app.use(webpackDevMiddleware(compiler, {
    //   publicPath: config.output.publicPath
    // }))
    
    this.app.use(express.static(config.output.publicPath))
    
    this.app.get('/bundle.js', (req, res) => {
      res.sendFile(path.join(__dirname, '../bundle.js'))
    })
    
    this.app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, '../src/index.html'))
    })
    
    this.app.listen(this.config.httpServer.port, (err) => {
      if (err) {
        console.log(err)
      } else {
        console.log('server started')
      }
    })
  }
}

module.exports = Server