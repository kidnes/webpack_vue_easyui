var webpack = require('webpack');

module.exports = {
    entry: {
        main: './src/app/main.js'
    },

    output: {
        path: './dist/js/',
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
            // {
            //     test: /\.js$/,
            //     loader: 'babel-loader?experimental',
            //     exclude: /node_modules/
            // },
            {test: /\.html$/, loader: 'html'},
            {test: /\.css$/, loader: 'style-loader!css-loader'},
            {test: /\.styl$/, loader: 'style-loader!css-loader!stylus-loader'},
            {test: /\.(png|jpg|gif)$/, loader: 'url-loader?limit=8192'}
        ]
    }
};
