module.exports = {
  devServer: {
    open: true,
    // host:"192.168.43.79",
    proxy: {
      "/api": {
        //请求称号
        // target: "http://192.168.43.79:888", //请求的接口
        target: "http://localhost:888",
        // target: "http://10.0.160.107:888",
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
