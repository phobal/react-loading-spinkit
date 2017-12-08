const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OpenBrower = require('open-browser-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const src = path.resolve(__dirname, './src');
module.exports = {
  entry: path.resolve(__dirname, 'app.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.min.js',
  },
  resolve: {
    modules: ['node_modules'],
    alias: {
      '@': path.resolve(__dirname, './'),
    },
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: [{
        loader: 'babel-loader',
        query: {
          plugins: [
            'transform-runtime',
            'transform-decorators-legacy',
          ].map(e => `babel-plugin-${e}`).map(require.resolve),
          presets: [
            'es2015',
            'react',
            'stage-0',
            'stage-2',
          ].map(e => `babel-preset-${e}`).map(require.resolve),
        },
      }],
    }, {
      test: /\.css$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: 'css-loader',
      }),
    }, {
      test: /\.(png|jpg|gif)$/,
      use: [{
        loader: 'url-loader?limit=25000&name=static/img/[name].[ext]?[hash]',
      }],
    }],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'index.html'),
    }),
    new ExtractTextPlugin('[name].css'),
    new OpenBrower({
      url: 'http://0.0.0.0:8090',
    }),
  ],
  devtool: '#inline-source-map',
};
