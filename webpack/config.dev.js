const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { paths, loaders } = require('./helpers');

module.exports = {
  name: 'client',
  entry: { main: ['webpack-hot-middleware/client?name=client', paths.client] },
  mode: 'development',
  devtool: 'eval',
  output: {
    path: paths.dist,
    filename: 'js/[name].js',
    publicPath: '/public/',
  },
  module: {
    rules: [loaders.RHL(), loaders.JS({ cacheDirectory: true }), loaders.Images()],
  },
  plugins: [
    new HtmlWebpackPlugin({ title: 'React Sweet Spot', template: 'index.html' }),
    new webpack.HotModuleReplacementPlugin(),
  ],
};
