const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  devtool: "source-map",

  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".scss"]
  },

  module: {
    rules: [
      {
        test: /\.html$/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]"
        }
      },
      {
        test: /\.(s?)css$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.ts(x?)$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: "ts-loader"
          }
        ]
      },
      {
        enforce: "pre",
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "source-map-loader"
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: false,
      template: require("html-webpack-template"),
      appMountId: "app",
      title: "Picnic Assignment",
      meta: [
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1.0"
        }
      ],
      links: ["https://fonts.googleapis.com/css?family=Lato"]
    })
  ]
};
