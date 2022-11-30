const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  mode: 'production',
  entry: {
    app: ['./src/index.js']
  },
  output: {
    path: path.resolve(__dirname, '/lib'),
    publicPath: '/',
    filename: 'index.js',
    chunkFilename: '[id].js',
    libraryTarget: 'umd',
    libraryExport: 'default',
    library: 'vue-luckyui',
    umdNamedDefine: true
  },
  // 性能
  performance: {
    hints: false
  },
  chainWebpack: (config) => {
    config.module
      .rule('js')
      .include.add(path.resolve(__dirname, 'packages'))
      .end()
      .use('babel')
      .loader('babel-loader')
      .tap((options) => {
        // 修改它的选项...
        return options;
      });
  },
  plugins: [
    new VueLoaderPlugin()
  ]
};