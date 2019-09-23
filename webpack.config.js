//Webpack will grab this module to run, hence it is important to export it
const path = require('path');

module.exports = {
    entry: "./src/app.js",
    output: {   //Will create the Bundle.js file mainly for production
        path: path.join(__dirname, 'public'),
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
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    devtool: '#source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public'), //Will run the webpack-dev-server which does not create the bundle file and runs it from memory.
        historyApiFallback: true //Tells the server that wed be using client server routes and send the index.html for every error
    }
}

