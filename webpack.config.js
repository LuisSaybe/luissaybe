const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function() {
  return {
    entry: [
      'core-js/stable',
      'regenerator-runtime/runtime',
      path.resolve(__dirname, 'web/js/index.jsx'),
      path.resolve(__dirname, 'web/sass/index.scss'),
    ],
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: "[contenthash].js",
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'web/index-template.html')
      }),
      new MiniCssExtractPlugin({
        filename: "[contenthash].css",
      })
    ],
    resolve: {
      alias: {
        common: path.resolve(__dirname, 'common'),
        web: path.resolve(__dirname, 'web'),
      },
      extensions: ['.js', '.jsx']
    },
    module: {
      rules: [
        {
          test: path => path.endsWith('.css'),
          include: /node_modules/,
          loaders:  [MiniCssExtractPlugin.loader, 'css-loader']
        },
        {
          test: path => path.endsWith('.scss'),
          exclude: /node_modules/,
          use: [{
            loader: MiniCssExtractPlugin.loader,
          }, {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              modules: {
                localIdentName: '[name]__[local]--[hash:base64:5]'
              }
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [require('autoprefixer')]
            }
          }, {
            loader: 'sass-loader',
            options: {
              implementation: require("sass"),
            },
          }]
        },
        {
          test: /(\.jsx?)$/,
          exclude: /node_modules/,
          use: [
            { loader: 'babel-loader' },
            { loader: 'eslint-loader' }
          ]
        }
      ]
    }
  };
};
