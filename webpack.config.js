const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        clean: true,
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port: 6500,
    },
    plugins: [new HtmlWebpackPlugin({
        title: 'Template',
        template: 'src/index.html'
    })],
    module: {
        rules: [{
            test: /\.coffee$/,
            loader: "coffee-loader",
        }, {
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader",
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        }, {
            test: /\.css$/i,
            use: [
                "style-loader",
                "css-loader", {
                    loader: "postcss-loader",
                    options: {
                        postcssOptions: {
                            plugins: [
                                [
                                    "tailwindcss", {},
                                    "autoprefixer", {},
                                    "postcss-preset-env", {
                                    },
                                ],
                            ],
                        },
                    },
                },
            ],
        }, ],
    },


};