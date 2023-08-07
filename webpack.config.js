const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const CopyPlugin = require("copy-webpack-plugin")
const isProduction = process.env.NODE_ENV === "production"
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
    entry: "./global.js",

    mode: isProduction ? "production" : "development",

    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        clean: true,
    },

    module: {
        rules: [
            { test: /\.css$/, use: [MiniCssExtractPlugin.loader, "css-loader"] },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "assets/img",
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: "assets/fonts",
            },
        ],
    },

    plugins: [
        new CopyPlugin({
            patterns: [{ from: "assets", to: "assets" }],
        }),
        new HtmlWebpackPlugin({
            template: "./index.html",
        }),
        new MiniCssExtractPlugin(),
    ],
    optimization:{
        minimizer: ["...", new CssMinimizerPlugin()]
}
}
