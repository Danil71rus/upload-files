const path = require("path")

module.exports = {
  devServer: {
    port: 8080
  },
  configureWebpack: {
    devtool: "source-map",
    resolve: {
      alias: {
        "@a":      path.resolve(__dirname, "src/assets"),
        "@c":      path.resolve(__dirname, "src/components"),
        "@v":      path.resolve(__dirname, "src/views"),
      },
    },
  },
  css: {
    loaderOptions: {
      scss: {
        prependData: `
                    @import "@a/styles/_components-vars.scss";
                    @import "@a/styles/_theme-vars.scss";
                `,
      },
    },
  },
};
