'use strict';

const webpack = require('webpack');

module.exports = {
  entry: './alloy-editor.js',
  output: {
    libary: 'alloyeditor',
    libraryTarget: 'umd',
    umdNamedDefine: true,
    filename: 'alloy-editor.js'
  }
};