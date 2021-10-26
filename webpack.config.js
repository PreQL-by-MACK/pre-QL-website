const path = require("path");
const webpack = require("webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "/src/index.js",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js"
  },
  mode: process.env.NODE_ENV,
  module: {
    rules: [
      {
        test: /\.tsx?/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.jsx?/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ["@babel/plugin-syntax-jsx"]
          },
        },
        exclude: /npm_modules/
      },
      {
        //npm install -D sass-loader css-loader style-loader webpack
        // /\.s[ac]ss$/i
        // /\.css /
        test: /\.s?css/,
        use: ["style-loader", "css-loader", "sass-loader"
        ],
      },
      {
        // Now we apply rule for images
        test: /\.(png|jpe?g|gif|svg)$/,
        use: [
          {
            // Using file-loader for these files
            loader: "file-loader",
            // loader: "url-loader",
            // In options we can set different things like format
            // and directory to save
            options: {
              outputPath: '/img'
            }
          }
        ]
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader'
      },
      // {
      //   test: /\.(png|jpg)$/,
      //   loader: 'url-loader'
      // },
    ]
  },
  resolve: {
    // Enable importing JS / JSX files without specifying their extension
    extensions: [".js", ".jsx", ".tsx", ".ts"],
  },
  plugins: [new HtmlWebPackPlugin({
    template: './src/index.html',
  })],
  devServer: {
    static: {
      directory: path.join(__dirname, '/src'),
    },
    hot: true,
    proxy: {
      '/': 'http://localhost:3000'
    },
    compress: true,
    port: 9000
  }
};
