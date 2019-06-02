const TerserPlugin = require('terser-webpack-plugin')
const webpack = require('webpack')
const dotenv = require('dotenv')

module.exports = {
  entry: ['./src/index.js'],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  optimization: {
    minimizer: [new TerserPlugin()],
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader'
      }
    }]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  node: {
    fs: 'empty',
    tls: 'empty',
    net: 'empty'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        GOOGLE_API_KEY: JSON.stringify(process.env.GOOGLE_API_KEY)
      }
    })
  ]
}