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

      {
        test: /\.(woff(2)?|ttf|eot|otf|svg)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader',
      },

      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true, // webpack@1.x
              disable: true, // webpack@2.x and newer
            },
          },
        ],
      },
    ]
  },
};
