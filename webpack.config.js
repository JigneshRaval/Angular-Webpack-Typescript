const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');
//const rootDir = path.resolve(__dirname, '..');

// Helper functions
/*
var ROOT = path.resolve(__dirname, '..');
function root(args) {
    args = Array.prototype.slice.call(arguments, 0);
    return path.join.apply(path, [ROOT].concat(args));
}
*/
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

        publicPath: "/", // string
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
    // require those dependencies but don't bundle them
    //externals: [/^\@angular\//, /^rxjs\//],

    resolve: {
        extensions: ['.js', '.ts', '.css'],
        // This will resolve module path when using "npm link"
        alias: { "@angular": path.join(__dirname, "node_modules/@angular") }
        //modules: ['src', 'node_modules']
        // OR this (surprisingly both worked for me):
        //alias: { "my-package": path.join(__dirname, "../my-package" },

        // You don't really need the resolve.fallback unless you do: import "something"
        // that is not in my-package's package.json dependencies.
        //fallback: path.join(__dirname, "node_modules")
    },
    resolveLoader: {
        modules: ["node_modules"] // This will resolve module path when using "npm link"
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'libs', 'polyfills']
        })
        /*,new webpack.ContextReplacementPlugin(
            /angular(\\|\/)core(\\|\/)@angular/,
            root('./src')
        )*/
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