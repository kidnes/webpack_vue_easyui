var fs = require('fs');
var paths = require('./');
var webpack = require('webpack');
// var webpackManifest = require('../lib/webpackManifest')
function getEntryPoint() {
    var jsSrc = paths.sourceDirectory + '/main.js';

    // var entry = {
    //   page1: [jsSrc + 'page1.js'],
    //   page2: [jsSrc + 'page2.js']
    // };
    // var files = fs.readdirSync(jsSrc);
    // var entry = {};
    // var reg = /index\.js$/;

    // for (var i = 0; i < files.length; i++) {
    //     var file = files[i];
    //     if (reg.test(file)) {
    //         entry[file.replace(reg, '')] = [
    //             jsSrc + file
    //         ];
    //     }
    // }

    // files.filter(function(file) {
    //   return reg.test(file);
    // }).map(function(file){
    //   entry[file.replace(reg, '')] = [jsSrc + file];
    // })
    return {main: jsSrc};
}

module.exports = function (env) {
    var jsDest = paths.publicDirectory + '/js/';

    var webpackConfig = {
        entry: {
            main: paths.sourceDirectory + '/main.js'
        },

        output: {
            path: jsDest,
            publicPath: '/js/',
            filename: '[name].js'
        },

        plugins: [
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery',
                'window.jQuery': 'jquery',
                Vue: 'Vue'
            })
        ],

        resolve: {
            extensions: ['', '.js'],
            modulesDirectories: ['web_modules', 'node_modules', 'node_modules/VueFrame']
        },

        module: {
            loaders: [
                {
                    test: /\.js$/,
                    loader: 'babel-loader?experimental',
                    exclude: /node_modules/
                },
                {test: /\.html$/, loader: 'html'},
                {test: /\.css$/, loader: 'style-loader!css-loader'},
                {test: /\.styl$/, loader: 'style-loader!css-loader!stylus-loader'},
                {test: /\.(png|jpg|gif)$/, loader: 'url-loader?limit=8192'}
            ]
        }

    };

    // if (env !== 'test') {
    //     // Factor out common dependencies into a shared.js
    //     webpackConfig.plugins.push(new webpack.optimize.CommonsChunkPlugin({
    //         name: 'shared',
    //         filename: '[name].js',

    //     }));
    // }

    if (env === 'development') {
        // webpackConfig.devtool = 'sourcemap'
        // webpack.debug = true
    }

    if (env === 'production') {
        webpackConfig.plugins.push(
            // new webpackManifest(publicPath, 'public'),
            new webpack.DefinePlugin({
                'process.env': {
                    NODE_ENV: JSON.stringify('production')
                }
            }),
            new webpack.optimize.DedupePlugin(),
            new webpack.optimize.UglifyJsPlugin()
        );
    }

    return webpackConfig;
};
