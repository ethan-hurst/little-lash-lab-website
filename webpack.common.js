const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = { 
    entry: {
        main: "./src/index.js",
        vendor: "./src/vendor.js"
      },        
    plugins: [
        new HtmlWebpackPlugin(
            {
                template: './public/index.html'
            }
        )
],
    module: { 
        rules: [
            {
                test: /\.html$/,
                use: ["html-loader"]
            },
            {
                test: /\.(svg|png|jpg|gif)$/,
                use: { 
                    loader: "file-loader",
                    options: { 
                        name: "[name]-[hash].[ext]",
                        outputPath: "assets"
                    }
                }
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/preset-env']
                  }
                }
            }
        ]
    }
}