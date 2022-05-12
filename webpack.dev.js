const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: './dist/bundle.js',
    path: path.resolve(__dirname),
    library: '@evecloud/sdk',
    libraryTarget: 'umd',
  },
  devServer: {
    contentBase: './src',
  },
  devtool: 'inline-source-map',
};