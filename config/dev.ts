import type { UserConfigExport } from "@tarojs/cli";
export default {
   logger: {
    quiet: false,
    stats: true
  },
  mini: {},
  h5: {
    devServer: {
      proxy: {
        '/api/qb': {
          target: 'http://192.168.3.196:8085/api/v2',
          changeOrigin: true,
          headers:{
            "Referer" : "http://192.168.3.196:8085/",
            "Origin": "http://192.168.3.196:8085/"
          },
          pathRewrite:{
            '/api/qb': ''
          }
        },
      }
    }
  }
} satisfies UserConfigExport<'webpack5'>
