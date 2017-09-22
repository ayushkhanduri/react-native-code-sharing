const express = require('express');
const path = require('path');
const webpack = require('webpack');
const webpackMiddleWare = require('webpack-dev-middleware');

const app = express(); 

const webpackConfig = require('../webpack/webpack.dev.config');
const compiler = webpack(webpackConfig);

app.use(webpackMiddleWare(compiler,{
    publicPath: webpackConfig.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'../public/index.html'));
});

app.listen(3000,(err)=>{
    if(err)
        return err
    console.log("Server listening to localhost:3000");
})