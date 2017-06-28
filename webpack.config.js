let webpack = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    devtool: "source-map",

    entry: __dirname + "/app/main.js",
    output: {
        path: __dirname + "/build",
        filename: "bundle.js",
        // filename: "bundle-[hash].js",
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
            },
            {
    			test: /\.scss$/,
    			loader: "style-loader!css-loader!sass-loader",
    		},
            {
                test: /\.vue$/,
                loader: "vue-loader",
            },
        ],
    },


    devServer: {
        contentBase: "./build", // 本地服务器所加载的页面所在的目录
        color: true, // 终端中输出结果为彩色
        historyApiFallback: true, // 不跳转
        inline: true, // 实时刷新
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + "/app/index.tmpl.html"
        }),
        new webpack.optimize.UglifyJsPlugin({
             sourceMap: true, // 压缩后仍然显示source map
        }),
    ],

};
