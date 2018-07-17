const path = require('path')
const webpack = require('webpack')
const {VueLoaderPlugin} = require('vue-loader')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'build.js'
  },
  module: {
    rules: [
      {test: /\.vue$/, loader: 'vue-loader'},
      {test: /\.pug$/, loader: 'pug-plain-loader'},
      {test: /\.styl(us)?$/, use: ['vue-style-loader', 'css-loader', 'stylus-loader']},
      {test: /\.css$/, use: ['vue-style-loader', 'css-loader']},
      {test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/}
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
  devServer: {
    historyApiFallback: true,
    noInfo: false,
    overlay: true
  },
  performance: {
    hints: false
  },
  plugins: [
    new VueLoaderPlugin(),
    new CopyWebpackPlugin([{from: './src/assets', to: 'assets'}])
  ]
}

if (process.env.NODE_ENV === 'production') {
  module.exports.mode = 'production'
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({'process.env': {NODE_ENV: '"production"'}}),
    new webpack.LoaderOptionsPlugin({minimize: true})
  ])
}
