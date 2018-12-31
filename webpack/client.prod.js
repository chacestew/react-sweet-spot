const webpack = require('webpack');
const LoadablePlugin = require('@loadable/webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const BrotliPlugin = require('brotli-webpack-plugin');
const { paths, loaders } = require('./helpers');

module.exports = {
  name: 'client',
  entry: { main: paths.client },
  mode: 'production',
  output: {
    path: paths.dist,
    filename: 'js/[name].[contenthash:8].js',
    publicPath: '/public/',
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 0,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
        },
      },
    },
  },
  module: {
    rules: [loaders.JS(), loaders.Images()],
  },
  plugins: [
    new webpack.HashedModuleIdsPlugin(),
    new LoadablePlugin({ filename: '../build/stats.json', writeToDisk: true }),
    new CompressionPlugin({
      test: /\.(js|css)$/,
    }),
    new BrotliPlugin({
      test: /\.(js|css)$/,
    }),
  ],
};
