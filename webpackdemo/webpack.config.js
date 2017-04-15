const path = require('path');
module.exports={
  entry:'./src/index.js',
  output:{
    path:path.resolve(__dirname,"build"),
    filename:'bundle.js'
  },
  devtool: "source-map", 
  watch:true,
  module: {
  rules: [
    { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
  ]
}
}