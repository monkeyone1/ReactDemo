const path = require('path');
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, "build"),
    filename: 'bundle.js',
    publicPath:"/build/"
  },
  devtool: "source-map",
  watch: true,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }, {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }, {
        test: /\.(jpe?g|png)$/,
        use: ['file-loader']
      }

    ]
  },
  devServer: {
  contentBase: path.join(__dirname, "/"),
  compress: true,
  port: 9000
}
}