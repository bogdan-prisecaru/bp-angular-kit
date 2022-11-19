const path = require('path');
const webpack = require('webpack');
//
const { merge } = require('webpack-merge');
const { AngularWebpackPlugin } = require('@ngtools/webpack');
//
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function({ app }) {
  const CONFIG = {
    entry: { // order is important
      polyfills: path.join(process.cwd(), 'src/polyfills.ts'),
      app: path.join(process.cwd(), 'src/index.ts'),
    },
    output: {
      path: path.join(process.cwd(), 'dist'),
      filename: '[name].js',
    },
    plugins: [
      new HtmlWebpackPlugin({
        inject: 'body',
        template: path.join(process.cwd(), 'src/index.ejs'),
        title: 'muie',
      }),
      new AngularWebpackPlugin({
        tsconfig: path.join(process.cwd(), 'tsconfig.json'),
        jitMode: true
      }),
    ],
    resolve: {
      alias: {
        '@common': path.join(process.cwd(), 'src/app/common'),
        '@core': path.join(process.cwd(), 'src/app/core'),
        '@models': path.join(process.cwd(), 'src/app/models'),
        '@modules': path.join(process.cwd(), 'src/app/modules'),
        '@ui': path.join(process.cwd(), 'src/app/ui'),
      },
      extensions: ['.ts', '.js', '.html', '.scss']
    },
    module: {
      rules: [
        {
          test: /\.[jt]sx?$/,
          loader: '@ngtools/webpack',
        },
        {
          test: /\.html$/i,
          use: 'raw-loader'
        }
      ]
    }
  };

  return merge(CONFIG, require('./webpack/' + (app.env || 'dev')));
}
