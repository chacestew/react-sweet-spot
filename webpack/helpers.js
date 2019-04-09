const path = require('path');

const currentDir = process.cwd();
const resolvePath = p => path.resolve(currentDir, p);

const paths = {
  client: resolvePath('src/client.js'),
  renderer: resolvePath('src/renderer.js'),
  dist: resolvePath('dist'),
  build: resolvePath('build'),
};

const loaders = {
  JS: options => ({
    test: /\.jsx?$/,
    exclude: /node_modules/,
    use: [{ loader: 'babel-loader', options }],
  }),
  RHL: () => ({
    test: /\.jsx?$/,
    include: /node_modules/,
    use: ['react-hot-loader/webpack'],
  }),
  Images: (options = {}) => ({
    test: /\.(jpe?g|png|gif|ico)$/,
    use: [
      {
        loader: 'file-loader',
        options: { name: '[name].[ext]', outputPath: 'images', ...options },
      },
    ],
  }),
};

module.exports = {
  paths,
  loaders,
};
