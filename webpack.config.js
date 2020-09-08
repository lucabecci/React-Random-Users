const path = require('path');
module.exports = {
    //archivo de entrada
    entry: './src/app.js',
    //archivo de salida mas intrucciones de donde guardarlo y que nombre tendra
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'public')
    },
    //configuracion de babe-loader para convertir es6 a es5
    module: {
        rules: [{
         loader: 'babel-loader',
         test: /\.js$/,
         exclude: /node_modules/ //esta configuracion es para que el babe loader excluya los node modules
        },
        { 
         use: ['style-loader', 'css-loader'], 
         test: /\.css/ 
        }]
       },
    //configuracion del modo de trabajo de webpack
    mode: 'development',
    //configuracion para webpack-dev-server para que sepa que archivo tomar
    devServer: {
        contentBase: path.join(__dirname, 'public')
       }
};