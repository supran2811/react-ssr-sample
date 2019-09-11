const path = require('path');

module.exports = {
    /// We need to tell webpack to run it in node
    target: 'node',

    // We need to tell the entry point of the application
    entry: './src/index.js',

    /// We need to tell the location where it should generate the output

    output: {
        filename : 'bundle.js',
        path: path.resolve(__dirname , "build")
    },

    /// Configure the webpack to run on the files

    module: {
        rules: [
            {
                test: /\.js?$/,
                loader:'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: [
                        'react' , 
                        'stage-0',
                        ['env' , {target: { browsers : ['last 2 version'] }}]
                    ]
                }
            }
        ]
    }
}