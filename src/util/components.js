
import Vue from 'vue'

const requireComponents = require.context(
    // 目录相对路径
    '@/componentsss',
    // 是否查询子目录
    false,
    // 匹配基础文件名的正则表达式
    /Gun[A-Z]\w+\.(vue|js)$/
)

requireComponents.keys().forEach(item => {
    // 获取组件配置
    const componentConfig = requireComponents(item)

    // 获取组件的 PascalCase 命名
    const componentName = 
            // 获取和目录深度无关的文件夹
            item.split('/')
                .pop()
            .replace(/\.\w+$/, '')
Vue.component(componentName,componentConfig.default||componentConfig)
    
});
