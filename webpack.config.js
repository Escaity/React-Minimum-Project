const path = require("path");

module.exports = {
  mode: "development",
  devtool: "eval-source-map",
  entry: "./src/index.jsx", //モジュールの読み込み開始場所
  output: {
    //どこにバンドル後のファイルをいれるか
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },

  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    port: 3000,
    open: true,
  },

  resolve: {
    extensions: [".js", ".jsx"],
  },

  module: {
    rules: [
      // bundle時に何をするか
      {
        test: /\.(js|jsx)$/, //このファイルに適合するものに対してuse以下の操作を行う
        use: [
          //useは後ろから順番に適用される
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/react"],
            },
          },
        ],
      },
    ],
  },
};
