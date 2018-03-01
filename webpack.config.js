'use strict';

const webpack = require('webpack');

module.exports = {
  entry: './alloy-editor.js',
  output: {
    libary: 'AlloyEditor',
    libraryTarget: 'umd',
    umdNamedDefine: true,
    filename: 'alloy-editor.js'
  }
};