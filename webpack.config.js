const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')
const basePath = __dirname

module.exports = {
  context: path.join(basePath, 'src'),
  resolve: {
    extensions: [".js", ".jsx"]
  },
  entry: {
    app: ["./index.jsx"],
    appStyles: ["./mystyles.scss"],
    vendorStyles: ["../node_modules/bootstrap/dist/css/bootstrap.css"]
  },
  output: {
    filename: "[name].[chunkhash].js"
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              implementation: require("sass")
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader"
        ]
      },
      {
        test: /\.(png|jpg)$/,
        exclude: /node_modules/,
        loader: "url-loader?limit=5000"
      },
      {
        test: /\.html$/,
        loader: "html-loader"
      },
    ]
  },
  devServer: {
    port: 8081
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunckFilename: "[id].css"
    })
  ]
}
