const path = require('path'); // donde nos estamos moviendo
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    // Punto de entrada, codigo inicial
    entry: './src/index.js',
    // output, donde vamos a poner nuestro proyecto antes de enviar a produccion
    output: {
        path: path.resolve(__dirname, 'dist'), // Donde lo vamos a poner
        filename: 'main.js' // Nombre del archivo a enviar a produccion
    },
    // Extensiones que va a utilizar nuestro proyecto
    resolve: {
        extensions: ['.js'] // Aquí se colocan todas las extenciones que voy a utilizar en mi proyecto
    },
    // Reglas a utilizar
    module: {
        rules: [
        {
            // Estructura de babel
            test: /\.js?$/,
            exclude: /node_modules/, // Para excluir los demas modulos,
            use: {
                loader: 'babel-loader'
            }
        }
    ]
    },
    plugins: [
        new HtmlWebpackPlugin(
            {
                inject: true, // Como voy a inyectar un valor a html
                template: './public/index.html', // Donde esta nuetro template base
                filename: './index.html' // Hacia donde lo tenemos que mandar en estrecaso lo guardo con el mismo nombre
            }
        ),
        new CopyWebpackPlugin({ 
            patterns: [{ 
            from: './src/styles/style.css',
            to: ''
            }],
        })
    ]
}