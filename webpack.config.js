const path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/js/app.js',
  output: {
    filename: './js/bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  module: {
    rules: [{ // views loader
      test: /\.view\.html$/,
      use: [{
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'views/'
        }
      }]
    },
    { // index.html loader
      test: /index\.html$/,
      use: [{
        loader: 'file-loader',
        options: {
          name: 'index.html'
        }
      }]
    },
    { // css loader
      test: /\.css$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: ['css-loader?importLoaders=1']
      })
    },
    { // sass / scss loader
      test: /\.(sass|scss)$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: ['css-loader', 'sass-loader']
      })
    },
    { // images loader
      test: /\.(png|jpg)$/,
      use: [{
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'images/'
        }
      }]
    },
    { // favicon loader
      test: /favicon\.ico$/,
      use: [{
        loader: 'file-loader',
        options: {
          name: 'favicon.ico'
        }
      }]
    }]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: './css/bundle.css',
      allChunks: true
    })
  ]
};
