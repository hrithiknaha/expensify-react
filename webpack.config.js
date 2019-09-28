//Webpack will grab this module to run, hence it is important to export it
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack')


module.exports = (env) => {
    const isProduction = env === 'production';
    const CSSExtract = new MiniCssExtractPlugin('styles.css')
    return {
        entry: ['babel-polyfill', "./src/app.js"],
        output: {   //Will create the Bundle.js file mainly for production
        path: path.join(__dirname,'public','dist'),
        filename: 'bundle.js'
        },
        module: {
            rules: [{
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            },{
                test: /\.s?css$/,
                use: [
                    {
                        loader : MiniCssExtractPlugin.loader
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                ]
            }]
        },
        plugins: [
            CSSExtract
        ],
        devtool: isProduction ? 'sourve-map' : 'inline-souce-map',
        devServer: {
            contentBase: path.join(__dirname, 'public'), //Will run the webpack-dev-server which does not create the bundle file and runs it from memory.
            historyApiFallback: true, //Tells the server that wed be using client server routes and send the index.html for every error
            publicPath: '/dist/'
        }
    }
}


