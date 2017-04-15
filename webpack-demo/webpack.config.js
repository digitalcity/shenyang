const path = require('path');
let webpack = require('webpack');

module.exports={
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: "./build/",
    filename: 'bundle.js'
  },
  watch: true,
  devtool: "source-map",
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, use: "babel-loader" },
      { test: /\.css$/, use: [ "style-loader","css-loader" ] },
      { test: /\.less$/, use: [ "style-loader","css-loader","less-loader" ] },
      { test: /\.(jpe?g|png)$/, use: 'file-loader' },
      { test: /\.(woff|woff2|ttf|svg|eot)(\?v=\d+\.\d+\.\d+)?$/, use: "url-loader" }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_console: false,
      }
    })
  ]
}
