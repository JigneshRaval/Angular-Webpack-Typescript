const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');
//const rootDir = path.resolve(__dirname, '..');

module.exports = {
    entry: {
        'app': './src/main.ts',
        'libs': './deps/vendor.ts', // Libs or Vendor files like jQuery, Lodash, Bootstrap etc. including Angular and RxJS
        'polyfills': './deps/polyfills.ts' // Polyfills like Core.js, Zone.js
    },
    output: {

        path: path.resolve(__dirname, "dist"), // string
        // the target directory for all output files
        // must be an absolute path (use the Node.js path module)

        filename: '[name].js', // string
        //filename: "[name].js", // for multiple entry points
        //filename: "[chunkhash].js", // for long term caching
        // the filename template for entry chunks

        publicPath: "/assets/", // string
        //publicPath: "",
        //publicPath: "https://cdn.example.com/",
        // the url to the output directory resolved relative to the HTML page

        libraryTarget: "umd", // universal module definition
        /*
		libraryTarget: "umd2", // universal module definition
        libraryTarget: "commonjs2", // exported with module.exports
        libraryTarget: "commonjs-module", // exports with module.exports
        libraryTarget: "commonjs", // exported as properties to exports
        libraryTarget: "amd", // defined with AMD defined method
        libraryTarget: "this", // property set on this
        libraryTarget: "var", // variable defined in root scope
        libraryTarget: "assign", // blind assignment
        libraryTarget: "window", // property set to window object
        libraryTarget: "global", // property set to global object
        libraryTarget: "jsonp", // jsonp wrapper
		*/
        // the type of the exported library
    },

    resolve: {
        extensions: ['.js', '.ts', '.css'],
        modules: [helpers.root('src'), helpers.root('node_modules')]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'libs', 'polyfills']
        })
    ],
    module: {
        rules: [
            {
                test: /\.ts$/,
                loaders: ['awesome-typescript-loader'],
                exclude: /(node_modules|bower_components)/
            },
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    {
                        loader: 'css-loader'
                    }
                ]
            }
        ]
    },
    devtool: 'source-map'
};