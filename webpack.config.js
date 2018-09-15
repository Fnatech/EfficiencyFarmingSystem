const path = require('path')
const webpack = require('webpack')

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: [
    'react-hot-loader/patch',
    './src/frontend/index.jsx',
  ],

  output: {
    path: path.join(process.cwd(), '/public/js'),
    filename: 'bundle.js',
    publicPath: '/',
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],

  module: {
    rules: [{
      test: /\.jsx?$/,
      use: [{
        loader: 'babel-loader',
      }],
      exclude:
      /node_modules/,
    }, {
      test: /\.(png|jpg|gif|ttf)$/,
      use: [
        {
          loader: 'url-loader'
        }],
    }],
  },

  resolve: {
    extensions: ['.js', '.jsx'],
  },
}

