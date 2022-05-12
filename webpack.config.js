const webpack = require('webpack');
const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: '../Manager/assets/js/evecloud.min.js',
    path: path.resolve(__dirname),
    libraryTarget: 'umd',
  },
  plugins: [
    new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery'
    })
],
};