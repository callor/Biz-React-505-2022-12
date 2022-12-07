/**
 * entry : 웹팩을 사용하여 번들링한 배포파일 진입점(시작점)
 * output : 배포파일들
 */
import HtmlWebpackPlugin from "html-webpack-plugin";
const port = 5000;
export default {
  mode: "development",
  entry: "./src/index.js",
  output: { filename: "bundle.[hash].js" },
  plugins: [new HtmlWebpackPlugin({ template: "public/index.html" })],
  devServer: {
    host: "localhost",
    port: port,
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.html$/,
        use: {
          loader: "html-loader",
          options: { minimize: true },
        },
      },
    ],
  },
};
