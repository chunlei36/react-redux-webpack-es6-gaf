const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'react-hot-loader/patch',
    'webpack-hot-middleware/client',
    './src/index',
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/',
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    /**
     * This is where the magic happens! You need this to enable Hot Module Replacement!
     */
    new webpack.HotModuleReplacementPlugin(),
    /**
     * NoErrorsPlugin prevents your webpack CLI from exiting with an error code if
     * there are errors during compiling - essentially, assets that include errors
     * will not be emitted. If you want your webpack to 'fail', you need to check out
     * the bail option.
     */
    new webpack.NoErrorsPlugin(),
    /**
     * DefinePlugin allows us to define free variables, in any webpack build, you can
     * use it to create separate builds with debug logging or adding global constants!
     * Here, we use it to specify a development build.
     */
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
    new ExtractTextPlugin('css/bundle.css'),
  ],
  module: {
    loaders: [
      {
        test: /\.js?/,
        exclude: [/node_modules/, /styles/],
        loaders: ['babel'],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.(css|scss)$/,
        exclude: path.join(__dirname, 'src/styles'),
        loaders: [
          'style-loader',
          'css-loader?modules&localIdentName=[name]__[local]__[hash:base64:5]',
          'postcss-loader',
          'sass-loader'
        ],
      },

      // // ExtractTextPlugin在生产环境中使用，否则无法实现css_modules的hot-reload
      // {
      //   test: /\.(css|scss)$/,
      //   exclude: path.join(__dirname, 'src/styles'),
      //   loader: ExtractTextPlugin.extract(
      //     'style-loader',
      //     'css-loader?modules&localIdentName=[name]__[local]__[hash:base64:5]!postcss-loader!sass-loader' // ExtractTextPlugin必须写一起
      //   )
      // },
      {
        test: /\.(css|scss)$/,
        include: path.join(__dirname, 'src/styles'),
        loaders: [
          'style-loader',
          'css-loader', // styles目录中的css不使用css_modules
          'postcss-loader',
          'sass-loader'
        ]
      }
    ]
  },
  resolve: {
    root: [
      path.resolve(__dirname),
    ],
    // add alias for application code directory
    alias: {
      components: 'src/components',
      containers: 'src/containers',
      actions: 'src/actions',
      constants: 'src/constants',
      reducers: 'src/reducers'
    },
    extensions: ['', '.js']
  }
};
