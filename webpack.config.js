const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');

const entryFile = './src/js/app.js';
const outputFolder = '/app/web/build';
const outputFile = 'app.js';

module.exports = {
    entry: entryFile,
    output: {
        path: path.join(__dirname, outputFolder),
        filename: outputFile
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: true // set to true if you want JS source maps
            }),
            new OptimizeCSSAssetsPlugin({})
        ]
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader",
                    "sass-loader"
                ]
            },
            // To be safe, we use enforce: "pre" section to check source files, not modified by other loaders (like babel-loader)
            {
                enforce: "pre",
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "eslint-loader",
                options: {
                    // eslint options (if necessary)
                }
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "app.css",
            chunkFilename: "[id].css"
        }),
        new StyleLintPlugin({
            configFile: ""
        })
    ]
};
