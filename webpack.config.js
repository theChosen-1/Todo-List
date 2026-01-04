const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'docs'),
        clean: true,  // Cleans dist folder before each build
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
        template: './src/template.html',  // Uses this as template
        filename: 'index.html',           // Creates dist/index.html
        }),
    ],
    devServer: {
        static: './dist',
        hot: true,  // Hot reload
    },
};