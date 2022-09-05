export default {
    proxy: {
      '/php': {
        'target': 'http://192.168.125.2:80/dashboard/snail/php/',
        'changeOrigin': true,
        'pathRewrite': { '^/api' : '' },
      },
    },
  }