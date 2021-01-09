const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
    mode: "development",
    entry: "./src/index.tsx",
    output: {
      filename: "main.js",
      path: __dirname + "/dist",
    },
    devtool: 'inline-source-map',
    resolve: {
      extensions: [".ts", ".tsx", ".js"],
    },
    module: {
      rules: [
        {
            test: /\.(js|jsx)$/,
            exclude: "/node_modules/",
            loader: "babel-loader",
        },
        {
        test: /\.css$/, 
        use: [{ loader: "style-loader" }, { loader: "css-loader" }],
        },
        {
            test: /\.tsx?$/,
            loader: 'ts-loader',
            exclude: /node_modules|\.d\.ts$/
        },
        {
            test: /\.d\.ts$/,
            loader: 'ignore-loader'
        },
        {
          test: /\.(png|jpe?g|gif)$/i,
          use: [
            {
              loader: 'file-loader',
            },
          ],
        },
        {
          test: /\.md$/i,
          use: [
            {
              loader: 'raw-loader',
              options: {
                esModule: true,
              },
            },
          ],
        },

      ],
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
        new webpack.DefinePlugin({
          'process.env.NODE_ENV': '"production"',
        })
    ]
  }