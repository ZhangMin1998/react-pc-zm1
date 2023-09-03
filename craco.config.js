// 添加自定义对于webpack的配置

const path = require('path')

module.exports = {
  // webpack配置
  webpack: {
    // 配置别名
    alias:{
      '@': path.resolve(__dirname, 'src')
    }
  }
}