const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin") // compensate for changing hashes in filenames
const {CleanWebpackPlugin} = require("clean-webpack-plugin"); // remove duplicate files
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // extract css into seperate files
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin"); // minify css
const TerserPlugin = require("terser-webpack-plugin");  // minify js
var BundleTracker = require('webpack-bundle-tracker');
const merge = require("webpack-merge");


const rootConfig = {
    context: __dirname,
    // optimization: [
    //     new OptimizeCssAssetsPlugin(), 
    //     new TerserPlugin(),
    //     new HtmlWebpackPlugin()
    // ],
    module: {
        rules: [
            {
                test: /\.(css|scss)$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            },
            {
                test: /\.html$/,
                use: ["html-loader"]
            },
            {
                test: /\.(svg|png|jpg|gif)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "[name].[ext]",
                        outputPath: "images"
                    }
                }
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "style-loader", "sass-loader"]
            }
        ]
    },
    plugins: [
        //     new HtmlWebpackPlugin({
        //     template: "./src/index.html"
        // }),
        new MiniCssExtractPlugin({filename: "[name].[contentHash].css"}),
        new CleanWebpackPlugin(),
        new BundleTracker({filename: './webpack-stats.json'})
    ]
}

const authenticationConfig = Object.assign({}, rootConfig, {
    entry: {
        landingPage: "./authentication/static/js/landingPage",
        login: "./authentication/static/js/login",
        register: "./authentication/static/js/register",
        expertRegister: "./authentication/static/js/expertRegister",
        categoryPage: "./authentication/static/js/categories",
        unregisteredNavbar: "./authentication/static/js/unregisteredNavbar",
        registeredNavbar: "./authentication/static/js/registeredNavbar",
        emailVerified: "./authentication/static/js/email_verified",
        phoneVerified: "./authentication/static/js/phone_verified",
        interestedExpert: "./authentication/static/js/interestedExpert"
    },

    output: {
        path: path.resolve("./authentication/static/bundles/"),
        filename: "[name]-[hash].js",
    }
})

// When a new app is added
// const app_nameConfig = Object.assign({}, rootConfig, {
//     entry: {
//         // pages in app go here as follows
//         page_name: "./app_name/static/js/page_name"
//     }
// })

const expertsConfig = Object.assign({}, rootConfig, {
    entry: {
        expAgreement: "./experts/static/js/expertsAgreement",
        expProfile: "./experts/static/js/expertsProfile",
        applicationSubmitted: "./experts/static/js/applicationSubmitted",
        expPage: "./experts/static/js/expertsPage"
    },
    output: {
        path: path.resolve("./experts/static/bundles/"),
        filename: "[name]-[hash].js",
    }
})

const customersConfig = Object.assign({}, rootConfig, {
    entry: {
        customersPage: "./customers/static/js/customersPage"
    },
    output: {
        path: path.resolve("./customers/static/bundles/"),
        filename: "[name]-[hash].js",
    }
})

// module.exports = [ authenticationConfig, expertsConfig, customersConfig ]
const output = merge.smartStrategy({
    entry: "append",
    output: "append"
})
module.exports = output(authenticationConfig, expertsConfig, customersConfig) // add configuration here