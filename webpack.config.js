const path = require("path");

const NODE_MODULES_PATH = path.resolve("node_modules");
const APP_PATH = path.resolve("app");
console.log(NODE_MODULES_PATH);
module.exports = {
  entry: path.resolve(APP_PATH, "main"),
  output: {
    filename: "app.js",
  },
  resolve: {
    root: NODE_MODULES_PATH,
    extensions: ["", ".ts", ".tsx", ".js"],
    modulesDirectories: [NODE_MODULES_PATH],
    alias: {
      'app': APP_PATH,
    },
  },
  module: {
    preLoaders: [
      {
        test: /\.ts(x?)$/,
        loader: "tslint-loader",
        include: APP_PATH,
      },
    ],
    loaders: [
      {
        test: /\.ts(x?)$/,
        loader: "babel-loader?presets[]=es2016&presets[]=es2015!ts-loader",
        include: APP_PATH,
      },
    ],
  },
  tslint: {
    configFile: false,
    emitErrors: false,
    failOnHint: false,
    tsConfigFile: path.resolve("tsconfig.json"),
  },
};
