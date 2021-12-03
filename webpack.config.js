const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
        open: true,
        hot: true,
      },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Need for Food',
            filename: 'index.html',
            template: path.resolve(__dirname, 'src/temp.html')
        }),
      ],
     output: {
      filename: 'bundle.js',
      filename: '[name].bundle.js',
      assetModuleFilename: '[name][ext]',
      path: path.resolve(__dirname, 'dist'),
      clean: true,
     },
     module: {
        rules: [
          {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
          },
          {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
          },
          {
            test: /\.(woff|woff2|eot|ttf|otf)$/i,
            type: 'asset/resource',
          },
        ],
      },
   };