const path = require('path')


module.exports = {
    entry: {
        app: './src/js/app.js'
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'app.build.js'
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options:{
                    presets: ['@babel/preset-env']
                }
            }
        ]
    }
}