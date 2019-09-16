const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
// const CopyPlugin = require('copy-webpack-plugin');
const postcssPresetEnv = require('postcss-preset-env');
const cssNano = require('cssnano');

module.exports = {
    entry: ['@babel/polyfill', './src/app.js'],
    output: {
        path: path.resolve(__dirname, 'public', 'dist'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './public',
        historyApiFallback: true,
        publicPath: '/dist/'
    },
    plugins: [
        
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './public/index.html',
        }), 
        new MiniCSSExtractPlugin({
            filename: '[name].css'
        }),
        /*
        new CopyPlugin([{
                from: 'src/img',
                to: 'img'
            },
            {
                from: 'src/img/favicon',
                to: 'favicon'
            },
        ]), */
    ],
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.s?css$/,
                use: [
                    MiniCSSExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            plugins: () => [
                                postcssPresetEnv({
                                    autoprefixer: {
                                        grid: 'no-autoplace'
                                    }
                                }),
                                cssNano({
                                    preset: 'default',
                                })
                            ]
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            },
            {
                test: /\.html$/,
                use: ['html-loader']
            },
            {
                test: /\.(svg|png|jpg|gif)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'img'
                    }
                }
            }
        ]
    },
    devtool: 'source-map'
};