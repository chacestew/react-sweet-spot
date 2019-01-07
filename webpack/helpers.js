const path = require('path');

const currentDir = process.cwd();
const resolvePath = p => path.resolve(currentDir, p);

const paths = {
  client: resolvePath('src/client.js'),
  dist: resolvePath('dist'),
};

const loaders = {
  JS: options => ({
    test: /\.js$/,
    exclude: /node_modules/,
    use: [{ loader: 'babel-loader', options }],
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
