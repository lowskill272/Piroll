const path = require('path');
module.exports = {
  entry: './src/js/index.js',
  output: {
    path: path.resolve(__dirname,'./dist/js'),
    filename: 'bundle.js',
    publicPath:'dist/js'
  },

  devtool: "source-map",

devServer: {
  overlay: true,
},

module: {
    rules: [
      {
        test: /\.js$/,
        // exclude: /node_modules/,
        loader: 'babel-loader',
      },

      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
    ]
  },
};
