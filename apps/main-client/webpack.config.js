const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const path = require("path")

// console.log(process.env.NODE_ENV)
const deps = require("./package.json").dependencies;
module.exports = {
  output: {
    publicPath: process.env.NODE_ENV === 'production' ? "/" : "http://localhost:2000",
    // chunkFilename: "[id]md.js",
    filename: 'bundle.[contenthash].js',
    path: path.resolve(__dirname, 'dist')
  },

  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
  },

  devServer: {
    port: 2000,
    historyApiFallback: true,
  },

  module: {
    rules: [
      {
        test: /\.m?js/,
        type: "javascript/auto",
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.(css|s[ac]ss)$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },

  plugins: [

    new ModuleFederationPlugin({
      name: "main_app",
      filename: "remoteEntry.js",
      remotes: {
        "SharedComponents": "remote1@http://localhost:2001/remoteEntry.js",
        "LoginPage": process.env.NODE_ENV === 'production' ? "login_client@/login.js" : "login_client@http://localhost:2002/login.js"
      },
      exposes: {},
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: deps["react-dom"],
        },
      },
    }),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
    }),
    new CleanWebpackPlugin({
      cleanAfterEveryBuildPatterns: [path.resolve(__dirname, 'dist/*.LICENSE.txt')],
    })
  ],
};
