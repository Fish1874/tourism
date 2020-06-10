# tourism

> 仿照去哪儿网APP project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

## 项目结构
```
.
|——build                                    // webpack配置文件
|——config                                   // 项目的配置文件
|——src                                      // 源码目录
|  └──App.vue                               // 原始的根组件
|  └──main.js                               // 整个项目的入口文件
|  └──assets                                // 项目要用的图片资源
|  |  └──styles                             // 样式文件
|  |  |  └──iconfont                        // 矢量图
|  |  |  └──iconfont.css                    // 矢量图CSS文件
|  |  |  └──mixins.styl                     //
|  |  |  └──varibles.styl                   // 公共样式
|  |  |  └──border.css                      // 解决移动端1px方案
|  |  |  └──reset.css                       // 移动端样式重置     
|  └──common                                // 项目中公用的组件
|  |  └──fade                               //  动画组件
|  |  |  └──FadeAnimation.vue               // 做一个渐隐渐显的效果
|  |  └──gallary                            // 之所以创建这个文件夹，万一以后组件越来越大的时候，可以拆分成多个小组件 
|  |  |  └──Gallary.vue                     // 使用swiper实现banner的逻辑
|  └──pages                                 // 放所有网页的组件
|  |  └──home                               // 主页
|  |  |  └──Home.vue                        // 
|  |  |  └──components                      // 放整个Home页面每个部分的组件
|  |  |  |  └──Header.vue                   // 页面的顶部 搜索框 
|  |  |  |  └──Swiper.vue                   // 轮播图 使用swiper插件
|  |  |  |  └──Icons.vue                    // 图标区
|  |  |  |  └──Recommend.vue                // 推荐旅游区
|  |  |  |  └──Weekend.vue                  // 周末旅游区
|  |  └──detail                             // 详情页
|  |  |  └──Detail.vue                      //
|  |  |  └──components                      // 放整个Detail页面每个部分的组件
|  |  |  |  └──Header.vue                   //
|  |  |  |  └──Banner.vue                   //
|  |  |  |  └──List.vue                     //
|  |  └──city                               // 城市页
|  |  |  └──City.vue                        //
|  |  |  └──components                      // 放整个City页面每个部分的组件
|  |  |  |  └──Header.vue                   //
|  |  |  |  └──Search.vue                   //
|  |  |  |  └──Alphabet.vue                 //
|  |  |  |  └──List.vue                     //
|  └──router                                // 路由文件夹
|  |  └──index.js                           // 设置切换页面
|  └──store                                 // 使用vuex共享数据
|  |  └──index.js                           // 主要文件
|  |  └──mutations.js                       // 存放修改数据的操作
|  |  └──state.js                           // 存放数据
|  └──static                                // 存放静态资源：静态图片、JSON数据...
|  |  └──mock                               // 存放本地开发用到的模拟数据
|  |  └──.gitkeep                           //
|  └──.babelrc                              // 语法解析器， 可以将VUE的单文件组件转为浏览器看的懂的代码
|  └──.editorconfig                         // 配置编辑器的语法
|  └──.eslintignore                         // eslintrc的配置项，里面注明的文件、代码写不规范也没事
|  └──.eslintrc.js                          // 代码检测，里面放的是代码的规范
|  └──.gitignore                            // 有些特殊的文件不想上传git，可以在这里注明
|  └──.postcssrc.js                         // Postcss的配置项
|  └──index.html                            // 默认的 项目首页模板文件
|  └──package-lock.json                     // 第三方包锁文件，确定第三方包的具体版本
|  └──package.json                          // 第三方依赖包
|  └──README.md                             // 项目说明文件
.
```
For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
