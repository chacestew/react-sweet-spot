const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const { paths, loaders } = require('./helpers');

module.exports = {
  name: 'server',
  target: 'node',
  entry: paths.renderer,
  mode: 'none',
  externals: ['@loadable/component', 'react-dom/server', nodeExternals()],
  output: {
    filename: 'server.js',
    path: paths.build,
    publicPath: '/public/',
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [loaders.JS(), loaders.Images({ emitFile: false })],
  },
  plugins: [new webpack.optimize.LimitChunkCountPlugin({ maxChunks: 1 })],
};
