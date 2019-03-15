const path = require('path');
const common = require('./webpack.common');
const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
    devtool: "source-map",
    mode: 'production',
    output: {
        filename: "[name]-[contentHash].bundle.js",
        path: path.resolve(__dirname, 'build')
    },
    optimization: { 
        minimizer: [ 
            new OptimizeCssAssetsWebpackPlugin(),
            new TerserPlugin({
                sourceMap: true
            }),
            new HtmlWebpackPlugin({
                template: './public/index.html',
                minify: { 
                    removeAttributeQuotes: true,
                    collapseWhitespace: true, 
                    removeComments: true
                }
            })
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({ filename: "style-[contentHash].css" }),
        new CleanWebpackPlugin()
    ],
    module: { 
        rules: [
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    }
});