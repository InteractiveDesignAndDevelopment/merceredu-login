const path = require('path');

const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const buildDirPath = path.join(__dirname, '/build');

module.exports = {
  entry: {
    plugin: './src/js/index.js'
  },

  output: {
    filename: '[name].js',
    path: buildDirPath
  },

  plugins: [
    // Remove various build dirs
    new CleanWebpackPlugin(buildDirPath),
    // Extract CSS into dedicated file
    new MiniCssExtractPlugin({
      filename: '[name].css'
    })
  ],

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: 'css-loader', options: { importLoaders: 1 } },
          'postcss-loader'
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(sass|scss)$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: 'css-loader', options: { importLoaders: 1 } },
          'postcss-loader',
          'sass-loader'
        ]
      }
    ]
  }
};
