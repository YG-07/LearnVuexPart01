# LearnVuexPart01
学习Vuex，它是一个专为 Vue.js 应用程序开发的状态管理模式  
  
### 一.资料整理来源
coderwhy老师  B站账号：ilovecoding  
bilibili URL：https://space.bilibili.com/36139192  
视频(130-p) URL：https://www.bilibili.com/video/BV15741177Eh?p=126  
  
# 二、本部分知识大纲
(数字表示视频URL分p)  
### 一、Vuex是什么 (130)
#### 1.1 Vue是做什么的
* 官方解释：Vuex是一个专为Vuejs应用程序开发的状态管理模式。
  * 它采用**集中式存储管理**应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。
  * Vuex 也集成到VWe 的官方调试工具devtools extension，提供了诸如零配置的time-travel 调试、状态快照导入导出等高级调试
功能。
* 状态管理到底是什么？
  * 状态管理模式、集中式存储管理这些名词听起来就非常高大上，让人捉摸不透。
  * 其实，你可以简单的将其看成把需要**多个组件共享的变量全部存储在一个对象**里面。
  * 然后，将这个对象放在顶层的Vue实例中，让其他组件可以使用。
  * 那么，多个组件是不是就可以共享这个对象中的所有变量属性了呢？
#### 1.2 为什么官方出Vuex插件
* 我们自己也可以封装一个对象来管理可以，只是我们要先想想VueJS带给我们最大的便利是什么呢？没错，就是**响应式**。
* 如果你自己封装实现一个对象能不能保证它里面所有的属性做到响应式呢？当然也可以，只是自己封装可能稍微麻烦一些。
* 不用怀疑，Vuex就是为了提供这样一个在多个组件间共享状态的插件，而且是响应式的，用它就可以了。
#### 1.3 管理什么状态，应用
* 有什么状态时需要我们在多个组件间共享的呢？
  * 如果你做过大型开放，你一定遇到过多个状态，在多个界面间的共享问题。
  * 比如用户的登录状态、用户名称、头像、地理位置信息等等。
  * 比如商品的收藏、购物车中的物品等等。
  * 这些状态信息，我们都可以放在统一的地方，对它进行保存和管理，而且它们还是响应式的（待会儿我们就可
以看到代码了，莫着急）。
  
### 二、安装和使用Vuex
#### 2.1 安装Vuex并使用
1. 安装指令：`npm install vuex --save`  
2. 创建store文件夹，里面创建index.js，类似路由的创建、注册和导出，
  但注意是创建的Vuex.Store()对象，`const store = new Vuex.Store({...})`
3. store对象的option有`state(状态)、mutations、actions、getters、modules`等
4. 调用时，使用$store变量：`{{$store.state.counter}}`  
#### 2.2 修改Vuex里的数据
1. (不推荐)可以通过调用的方式修改，因为多处同时修改时，无法追踪
2. 应该按照流程：`Vue Components - Actions - Mutations - State`的方式修改
* Devtools插件可以追踪`同步操作`，Backend API(后端应用程序接口)，  
 可以跳过Actions修改数据，`Action处理异步操作，Mutations处理同步操作`  
#### 2.3 按照Chrome的Devtools插件
* 下载地址(外网)：https://chrome.google.com/webstore  
* 安装了扩展之后重新打开Chrome浏览器，F12里多了一项`Vue`视图
#### 2.4 修改操作
* 先在index.js里store对象的mutations属性里定义方法
```javaScript
mutations: {
    increment(state) {
      state.counter++
    }...
  }
```
* 在再各个组件里定义点击事件方法
```HTML
<button @click="add">+</button>

add() {
  this.$store.commit('increment')
}...
```


