const webpackConfig = require("./webpack.config");

module.exports = function (config) {
  let _webpackConfig = webpackConfig;

  config.set({
    basePath: "",
    frameworks: ["jasmine"],

    files: ["tests/*.ts"],
    client: {
      jasmine: {
        random: false
      }
    },
    exclude: ["node_modules"],
    preprocessors: {
      "tests/*.ts": ["webpack"]
    },
    webpack: {
      module: _webpackConfig.module,
      resolve: _webpackConfig.resolve,
      mode: _webpackConfig.mode,
      devtool: "inline-source-map"
    },

    reporters: ["spec"],

    port: 9876,

    colors: true,

    logLevel: config.LOG_INFO,

    autoWatch: true,

    browsers: ["Chrome"],

    singleRun: false,
    concurrency: Infinity
  });
};