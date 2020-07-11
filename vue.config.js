// module.exports = {
//   css: {
//     loaderOptions: {
//       postcss: {
//         plugins: [
//           require('autoprefixer')({
//             // 配置使用 autoprefixer
//             overrideBrowserslist: ['last 15 versions']
//           }),
//           require('postcss-pxtorem')({
//             rootValue: 37.5, // 换算的基数
//             // 忽略转换正则匹配项。插件会转化所有的样式的px。比如引入了三方UI，也会被转化。目前我使用 selectorBlackList字段，来过滤
//             //如果个别地方不想转化px。可以简单的使用大写的 PX 或 Px 。
//             selectorBlackList: ['ig'],
//             propList: ['*'],
//             exclude: /node_modules/
//           })
//         ]
//       }
//     }
//   }
// };
// module.exports = {
//   plugins: {
//     autoprefixer: {
//       browsers: ['Android >= 4.0', 'iOS >= 8']
//     },
//     'postcss-pxtorem': {
//       rootValue: 37.5,
//       propList: ['*']
//     }
//   }
// };
module.exports = {
  configureWebpack: {
    devtool: 'source-map'
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:3001',
        ws: true, //是否代理websockets
        changeOrigin: true,
        pathRewrite: {
          //重写路径 比如'/api/aaa/ccc'重写为'/aaa/ccc'
          '^/api': ''
        }
      }
    }
  }
};
