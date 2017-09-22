const path = require('path');
module.exports = {
    entry: path.resolve(__dirname, './app/js/app.js'),
    output: {
        path: path.resolve(__dirname, './public'),
        filename: 'app.bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: [/node_modules/],
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['react', 'env']
                    }
                }
            }
        ]
    }
};
