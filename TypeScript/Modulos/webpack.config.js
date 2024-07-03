const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.join(__dirname, 'modulos.ts'),
    output: {
        filename: 'modulos.js',
        path: path.resolve(__dirname, 'dist'),  // Cambia el directorio de salida a 'dist'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
            },
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'index.html'),  // Ruta a tu archivo index.html
        })
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),  // Servir archivos desde 'dist'
        },
        compress: true,
        port: 9000,
    },
};
