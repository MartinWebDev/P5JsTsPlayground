// This library is for generating the output html root file from a template. (Our template will be lazy, just an exact html file).
var HtmlWebpackPlugin = require('html-webpack-plugin');

var path = require("path");

var config = {
    entry: ["./src/App.ts"],
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "App.js",
        publicPath: "/"
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/,
            }
        ]
    },
    watch: true,
    devtool: "source-map",
    devServer: {
        contentBase: path.join(__dirname, "src"),
        compress: true,
        port: 3000,
        //host: "0.0.0.0", 
        disableHostCheck: true,
        historyApiFallback: true,
        stats: "errors-only",
        open: true,
        openPage: ''
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "ReactJS demo for James",
            hash: true,
            template: "./src/index.ejs"
        })
    ]
};

module.exports = config;
