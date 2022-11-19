const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  mode: 'development',
  devServer: {
    historyApiFallback: true,
    hot: true,
    port: 3000,
    liveReload: false,
    static: [
      {
        directory: path.join(process.cwd(), 'dist'),
      },
      {
        directory: path.join(process.cwd(), 'src'),
      },
    ]
  }
}
