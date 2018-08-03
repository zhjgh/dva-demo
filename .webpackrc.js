const path = require('path');

export default {
  extraBabelPlugins: [['import', { libraryName: 'antd', libraryDirectory: 'es', style: true }]],
  alias: {
    '@/components': path.resolve(__dirname, 'src/components/'),
    '@/utils': path.resolve(__dirname, 'src/utils/'),
    '@/services': path.resolve(__dirname, 'src/services/'),
  },
  proxy: {
    "/api": {
      "target": "https://api.douban.com/",
      "changeOrigin": true,
      "pathRewrite": { "^/api" : "" }
    }
  },
};
