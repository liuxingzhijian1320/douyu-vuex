# douyu-vuex

[vue的版本](https://github.com/liuxingzhijian1320/douyu-vue)

- vue + vuex + axios + vue-router + swiper + mint-ui

- 斗鱼的api文档查看assets/pdf的文件

已完成：
1. swiper组件编写
2. sideMenu侧边导航
3. 返回顶部（到达顶部时间固定）
4. 加载更多
5. 反向代理
6. 全部封装axios的拦截器
7. 登陆拦截验证
8. rem布局（750来适配）
9. 头像上传功能（本地保存base64，通过eventbus来实现通讯）
10. 解决ios部分手机不能修改title的问题

未完成的部分：想到啥就做啥功能


tips：
 swiper 4.0 的版本 ，打包的js的会出现的问题，只能在index.html中使用script标签中引入（官方的问题的，低版本又不支持的import方式，4。0版本支持，但是官方没有的把包加进去）
