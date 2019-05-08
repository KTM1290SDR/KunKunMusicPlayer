module.exports = {
  devServer: {
    open: true,
    proxy: {
      "/api": {
        //请求称号
        target: "http://localhost:888", //请求的接口
        changeOrigin: true, //允许跨域
        pathRewrite: {
          "^/api": ""
        }
      }
    }
  },

  publicPath: './',
  outputDir: undefined,
  assetsDir: undefined,
  runtimeCompiler: undefined,
  productionSourceMap: undefined,
  parallel: undefined,
  css: undefined
};
