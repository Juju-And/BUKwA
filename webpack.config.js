module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "app.js",
        path: __dirname + "/docs"
    },
    resolve: {
        extensions: [".js", ".jsx"]
    },
    devServer: {
        contentBase: __dirname + "/docs"
    },
    module: {
        rules: [
            {
                test: /\.jsx?/,
                loader: "babel-loader",
                exclude: /node_modules/,
                options: {
                    presets: ["@babel/preset-react"],
                    plugins: ["@babel/plugin-proposal-class-properties"]
                }
            },
            {
                test: /\.scss$/,
                use: [
                    {loader: "style-loader"}, // creates style nodes from JS strings
                    {
                        loader: "css-loader",
                        options: {
                            modules: true,
                            localIdentName: '[name]__[local]--[hash:base64:5]',
                        }
                    }, // translates CSS into CommonJS
                    {loader: "sass-loader"} // compiles Sass to CSS, using Node Sass by default
                ]
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/i,
                use: [
                    {
                        loader: "url-loader"
                    }
                ]
            }
        ]
    }
}