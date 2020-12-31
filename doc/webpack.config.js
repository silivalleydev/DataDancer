const HtmlWebpackPlugin = require("html-webpack-plugin");

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
            test: /\.(js|jsx)$/, // 컴포넌트 파일을 읽어오는 규칙입니다.
            exclude: "/node_modules/",
            loader: "babel-loader",
        },
        {
        test: /\.css$/, // 스타일 속성 파일을 읽어오는 규칙입니다.
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
      ],
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
  }