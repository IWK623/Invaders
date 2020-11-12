'use strict';

const webpack = require('webpack');
const path = require('path');
var nodeExternals = require('webpack-node-externals');

module.exports = {
    mode: 'development',
    performance: {
      hints: false
    },

    entry: './src/index.js',

    output: {
        path: path.resolve(__dirname, 'build'),
        publicPath: '/build/',
        filename: 'project.bundle.js'
    },

    module: {
        rules: [
          {
            test: [ /\.vert$/, /\.frag$/ ],
            use: 'raw-loader',
//            exclude :  /node_modules/,
          }
        ]
    },

    target: 'node',
    externals: [nodeExternals()],

    plugins: [
        new webpack.DefinePlugin({
            'CANVAS_RENDERER': JSON.stringify(true),
            'WEBGL_RENDERER': JSON.stringify(true)
        })
    ]

};
