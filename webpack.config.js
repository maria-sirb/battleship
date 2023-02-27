const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

 module.exports = {
    mode: 'development',
   entry: './src/js/index.js',
   output: {
     filename: '[name].bundle.js',
     path: path.resolve(__dirname, 'dist'),
     clean: true
   },
   devtool: 'inline-source-map',
   devServer: {
    static: './dist',
  },
  experiments: {
    topLevelAwait: true
  },
  optimization: {
    runtimeChunk: 'single',
  },
   plugins: [
    new HtmlWebpackPlugin({
      title: 'Battleship',
      template: 'src/index.html'
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
 };