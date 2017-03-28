var HTMLWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
    template: __dirname + "/app/index.html",
    filename: "index.html",
    inject: "body"
})

module.exports = {
    entry: __dirname + "/app/index.js",
    devtool: '#inline-source-map',
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query:{
                    presets: ['react', 'es2015']
                }
            },{
                test: /\.scss$/,
                use: ['font-loader', 'style-loader', 'css-loader', 'sass-loader']
            },{
                test: /\.css$/,
                use: ['font-loader', 'style-loader', 'css-loader']
            },{
                test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/,
                use: ['url-loader']
            }
        ]
    },
    output: {
        filename: "transformed.js",
        path: __dirname + "/build"
    },

    plugins: [
        HTMLWebpackPluginConfig,
    ]
    
}
