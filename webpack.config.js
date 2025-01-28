const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  entry: {
    main: "./src/ts/main.ts",
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: "[name]-bundle.js",
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  module: {
    rules: [
      { test: /\.ts?$/, loader: "ts-loader" },
    ],
  },
  plugins: [
    new CopyWebpackPlugin({ 
      patterns: [
        { from: './src/html' }
      ]
    })
  ],
};
