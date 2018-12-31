const webpack = require('webpack');
const LoadablePlugin = require('@loadable/webpack-plugin');
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
    rules: [loaders.JS({ cacheDirectory: true }), loaders.Images()],
  },
  plugins: [new LoadablePlugin(), new webpack.HotModuleReplacementPlugin()],
};
