const { injectBabelPlugin } = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less');
// 引入主题配置文件
const obj = require('./src/theme/theme')

module.exports = function override(config, env) {
  config = injectBabelPlugin(['import', { libraryName: 'antd-mobile', style: true }], config);
  config = rewireLess.withLoaderOptions({
    modifyVars: obj
  })(config, env);
  return config;
};
