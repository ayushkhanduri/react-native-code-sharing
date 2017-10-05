const path = require('path');
const webpack = require('webpack');

const BUILD_DIR = path.resolve(__dirname,'../build');
const ENTER_DIR = [path.resolve(__dirname,'../../app/web/index.js')];

const DEV_ENTRY = ENTER_DIR.concat(['webpack-hot-middleware/client']);

let webpackDevConfig = {
    entry: {
        // the app key caused the file name to output as app.js in output:[name]
        app: DEV_ENTRY
    },
    output: {
        path: BUILD_DIR,
        filename: '[name].bundle.js',
        publicPath: '/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            mode: JSON.stringify('web')
        }),
        new webpack.NormalModuleReplacementPlugin(
            /(.*)_PLATFORM(\.*)/,
            function(resource){
              resource.request = resource.request
                .replace(/_PLATFORM/, `${process.env.PLATFORM}`);
            }
        )
    ],
    module:{
        loaders: [
            {
                test: /\.js$/,
                loaders:[ 'babel-loader'],
                exclude: /node_modules/
            },
            { 
                test: /\.css$/, 
                loaders: [ 'style-loader', 'css-loader' ]
            },
        ]
    },
    stats:{
        colors: true
    },
    devtool:'cheap-module-eval-source-map'
}

module.exports = webpackDevConfig;
