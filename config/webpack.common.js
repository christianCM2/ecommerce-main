
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

/** @type {import('webpack').Configuration} */
module.exports={
    entry:"./src/index.js",
    output:{
        path:path.resolve(__dirname,"../dist"),
        filename:"[name].[contenthash].js",
        publicPath: ""
    },
    
    module:{
        rules:[
            {
                use:["babel-loader","eslint-loader"],
                test: /.(js|jsx)$/,
                exclude:/node_modules/
            },
           
            {
                type:"asset",
                test:/\.(png|svg|jpg|gif)$/i,
            },
        ],
    } ,
    resolve:{
        extensions:[".js","jsx",".json",".react.js"]
    },
    plugins:[
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template:"./public/index.html",
        })
    ]
};