const { HotModuleReplacementPlugin } = require("webpack");
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const { default: merge } = require("webpack-merge");
const common = require("./webpack.common");

/** @type {import('webpack').Configuration} */
const devConfig={
 mode:"development",
 devServer:{
     port:3000,
     contentBase:"../dist",
     open:"safari",
     hot:true,
 },
 target:"web",
 plugins:[new HotModuleReplacementPlugin(), new ReactRefreshWebpackPlugin()],
 devtool:"eval-source-map",
 module:{
    rules:[
       {
           use:["style-loader","css-loader","babel-plugin-styled-components"],
           test: /.(css|sass|scss)$/,
       },
    ]
}

}
module.exports = merge(common,devConfig);