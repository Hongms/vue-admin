const path = require("path");
const { config } = require("process");

module.exports = {
  //基本路径
  publicPath: process.env.NODE_ENV === "production" ? "" : "/",
  //输出文件目录
  outputDir: process.env.NODE_ENV === "production" ? "dist" : "devdist",
  lintOnSave: false,
  chainWebpack: config => {},
  configureWebpack: config => {
    // config.resolve = {// 配置解析别名
    //     extension:['.js','.json','.vue'],
    //     alias:{
    //         '@':path.resolve(__dirname,'./src'),
    //         'public':path.resolve(__dirname,'./public'),
    //         'components':path.resolve(__dirname,'./src/components'),
    //         'common':path.resolve(__dirname,'./src/common'),
    //         'api':path.resolve(__dirname,'./src/api'),
    //         'views':path.resolve(__dirname,'./src/views'),
    //         'data':path.resolve(__dirname,'./src/data'),
    //     }
    // }
  },
  // 生产环境是否生成 sourceMap 文件
  productionSourceMap: false,
  // css 相关配置
  css: {
    // 是否使用 css 分离插件 ExtractTextPlugin
    extract: true,
    // 开启 css source maps
    sourceMap: false,
    // css 预设置配置项
    loaderOptions: {
      sass: {
        // data:`@import "./src/styles/main.scss";`
        prependData: `@import "./src/styles/main.scss";`
      }
    },
    // 启用 css modules for all css / pre-processor files
    // modules:false
    requireModuleExtension: true
  },
  // use thread-loader for babel & TS in production build
  // enabled by default if the machine has more than 1 cores
  parallel: require("os").cpus().length > 1,
  // pwa 插件相关配置
  pwa: {},
  // webpack-dev-server 相关设置
  devServer: {
    open: false, // 编译完成是否打开网页
    host: "0.0.0.0", // 指定使用地址，默认 localhost,0.0.0.0 代表可以被外界访问
    port: 8080, // 访问端口
    https: false, // 编译失败对刷新页面
    hot: true, // 开启热加载
    hotOnly: false,
    proxy: null, // 设置代理
    overlay: {
      warnings: true,
      errors: true
    },
    before: app => {}
  },
  // 第三方插件配置
  pluginOptions: {}
};
