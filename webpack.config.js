
var webpack = require('webpack');
require('es6-promise').polyfill();

var reactExternals = {
  root: 'React',
  commonjs2: 'react',
  commonjs: 'react',
  amd: 'react'
};
var reactDOMExternals = {
  root: 'ReactDOM',
  commonjs2: 'react-dom',
  commonjs: 'react-dom',
  amd: 'react-dom'
};

module.exports = {

  entry: './src/js/components/app.js',

  output: {
    path: './build',
    filename: 'build.js'
  },

  externals: [
    {
      'react': reactExternals,
      './React': reactExternals,
      'react-dom': reactDOMExternals
    }
  ],

  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel'
      },
      {
        test: /\.sass$/,
        loaders: ['style','css', 'sass']
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': '"production"'
      }
    })
  ]

};
