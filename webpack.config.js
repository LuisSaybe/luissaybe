const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function() {
  return {
    entry: [
      path.resolve(__dirname, 'web/js/index.tsx'),
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
      extensions: ['.js', '.jsx', '.ts', '.tsx']
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
                localIdentName: '[path]-[name]-[local]'
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
          test: name => name.endsWith('.ts') || name.endsWith('.tsx'),
          exclude: /node_modules/,
          use: [
            { loader: 'babel-loader' },
            {
              loader: "ts-loader",
            },
          ]
        }
      ]
    }
  };
};
