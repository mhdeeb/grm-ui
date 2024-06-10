const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const CompressionWebpackPlugin = require("compression-webpack-plugin");

module.exports = {
  mode: "production",
  entry: { bundle: path.resolve(__dirname, "src", "js", "index.tsx") },
  output: {
    path: path.resolve(__dirname, "docs"),
    filename: "[contenthash].js",
    clean: true,
    assetModuleFilename: "[name][ext]",
  },
  devtool: "source-map",
  devServer: {
    static: {
      directory: path.join(__dirname, "docs"),
    },
    hot: true,
    open: true,
    compress: true,
    port: 3000,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.ts?x$/i,
        loader: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.js$/i,
        enforce: "pre",
        loader: "source-map-loader",
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|webp|ico)$/i,
        type: "asset/resource",
      },
      {
        test: /.(js|jsx)$/i,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
        },
      },
      // {
      //   test: /\.html$/i,
      //   loader: "html-loader",
      //   exclude: path.resolve(__dirname, "src", "html", "index.html"),
      // },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Test App",
      template: path.resolve(__dirname, "src", "html", "index.html"),
      filename: "index.html",
      favicon: "./src/asset/favicon.ico",
    }),
    // new CompressionWebpackPlugin(),
  ],
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  performance: {
    maxAssetSize: 300000,
    maxEntrypointSize: 300000,
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
};
