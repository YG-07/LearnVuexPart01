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
  
### 二、安装和使用Vuex (131-132)
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
#### 2.4 Vuex的mutations修改操作
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
### 三、State单一状态树 (133)
#### 3.1 Vuex的单一状态树
* 英文名称是`Single Source of Truth`，也可以翻译成**单一数据源**。
#### 3.2 生活中的例子
* 我们知道，在国内我们有很多的信息需要被记录，比如上学时的个人档案，工作后的社保记录，公积金记录，结婚后的婚姻信息，以及其他相关的户口、医疗、文凭、房产记录等等（还有很多信息）。
* 这些信息被分散在很多地方进行管理，有一天你需要办某个业务时（比如入户某个城市市，你会发现你需要到各个对应的工作地点去打
印、盖章各种资料信息，最后到一个地方提交证明你的信息无误。
* 这种保存信息的方案，不仅仅低效，而且不方便管理，以及日后的维护也是一个庞大的工作（需要大量的各个部门的人力来维护，当
然国家目前已经在完善我们的这个系统了）。
#### 3.3 应用开发类似
* 如果你的状态信息是保存到多个Store对象中的，那么之后的管理和维护等等都会变得特别困难。
* 所以Vuex也使用了单一状态树来管理**应用层级的全部状态**。
* 单一状态树能够让我们`最直接的方式`找到某个状态的片段，而且在之后的维护和调试过程中，也可以非常**方便的管理和维护**

### 四、Vuex的更多操作 (134)
#### 4.1 Vuex的getters获取计算后的数据
* 先在getters里定义获取的数据的方法
```javaScript
getters: {
  powerCounter(state) {
    return state.counter * state.counter
  }
}
```
* 在再组件里调用，也可以写成计算属性
```html
<p>$store.getters.powerCounter</p>
```
#### 4.2 案例：获取Vuex管理的学生数组里的数据
state里有一个学生信息数组，包括学生姓名、分数等  
需求：1.通过getters获取分数>=60的学生信息，2.通过getters获取分数>=60的学生个数，3.通过getters传一个名字获取学生信息
* index.js的代码,1使用.filter()过滤器，2getters的函数传递getters参数(最多2个参数)，3返回一个带参数的函数，即可解决只能传2个参数的问题了
```javaScript
passStudents(state){
  return state.students.filter(s => s.score >=60)
},
passStudentsLength(state, getters){
  return getters.passStudents.length
},
nametoStu(state) {
  return stuName => {
    return state.students.filter(s => s.name == stuName)
  } 
}
```
* App.vue组件的代码，通过$store.getters调用对应函数即可，其他组件同理
```html
<p>{{$store.getters.passStudents}}</p>
<p>{{$store.getters.passStudentsLength}}</p>
<p>{{$store.getters.nametoStu('Tom')}}</p>
```
### 五、mutations携带参数 (135)
#### 5.1 mutation的参数
* 在通过mutation更新数据的时候，有可能我们希望携带一些**额外的参数**，这些参数被称为是mutation的**载荷（Payload）**  
* mutation更新数据也会引起getters的更新，都是响应式的
#### 5.2 mutation传参案例
(分别是mutation定义、App调用代码)  
1. **传递变量**
```javaScript
incrementCount(state, count) {
  state.counter += count
}

addCount(count) {
  this.$store.commit('incrementCount', count)
}
```
2. **传递对象**
```javaScript
addStudent(state, student){
  state.students.push(student)
}

const aStu = {id: 1008, name: 'Mary', score: 91}
addStu(aStu) {
  this.$store.commit('addStudent', aStu)
}
```
#### 5.3 mutation的提交风格 (137)
Vue还提供了另外一种风格，它是一个包含type属性的对象  
```javaScript
this.$store.commit({
  type:'incrementCount',
  count
})
```
mutation中处理方法就是将commit的对象作为payload使用
```javaScript
incrementCount(state, payload) {
  state.counter += payload.count
}
```
#### 5.4 Vuex的mutation的响应式原理
* 直接对state初始化的数据修改是响应式的，添加state没有初始化的数据不是响应式的
* 类比组件里的数组修改，使用Vue.set()的方法对state的数据修改是响应式的
```javaScript
updateInfo(state) {
  state.info.name = 'Peter'
  // state.info['address'] = 'America'  //不是响应式
  // 数组push、pop等等和Vue.set、Vue.delete方法是响应式
  Vue.set(state.info, 'address', 'America')
  // delete state.info.age  //不是响应式
  Vue.delete(state.info, 'age')
}
```
#### 5.6 mutation的类型常量 (138)
1. 使用mutation的问题：  
* 在mutation中，我们定义了很多事件类型（也就是其中的方法名称）  
* 当我们的项目增大时，Vuex管理的状态越来越多，需要更新状态的情况越来越多，那么意味着Mutation中的方法越来越多。
* 方法过多，使用者需要花费大量的经历去记住这些方法，甚至是多个文件间来回切换。查看方法名称，甚至如果不是复制的时候，可能还会出现写错的情况。
2. 解决方法
* 在store里新建一个**mutations-types.js**文件用来`将mutation的方法名变成常量`
* 1.在常量文件中export导出常量
```javaScript
export const INCREMENT = 'increment'
export const DECREMENT = 'decrement'
```
* 2.在index.js和App组件里通过对象的方式导入`import {...}`
```javaScript
import {
  INCREMENT,
  DECREMENT
} from './store/mutations-types'
```
* 3.然后分别使用常量
```javaScript
// mutations定义方法
[INCREMENT](state) {
  state.counter++
}
//App调用方法
add() {
  this.$store.commit(INCREMENT)
}
```
3.mutation常量类型的作用
* 这样在编程时，在mutation里定义了方法，不用每次都通过复制粘贴的方式调用
* 将index.js和组件通过mutation的常量js连接起来，使双方在使用时，避免方法名的错误
  
### 六、Vuex的actions (139)
#### 6.1 通过action处理异步操作
* 需要异步修改state里的数据时，需要通过action的方法调用mutation的方法(**修改state数据必须经过mutation!**)
#### 6.2 action异步操作案例
需求：延迟1秒修改state里的info对象的name值,打印message，再回调打印成功信息  
* 方法一
1. actions里面定义方法，参数有`context`: 上下文,可选`payload`,延迟1秒`通过context调用mutation的commit方法`
```javaScript
aUpdateInfo(context, payload) {
  setTimeout(() => {
    context.commit('updateInfo')
    console.log(payload.message);
    payload.success()
  }, 1000)
}
```
2. App里面使用action操作,使用`dispatch方法`
```javaScript
changeInfo() {
this.$store.dispatch('aUpdateInfo', {
  message: '这是action的payload',
  success: () => console.log('修改成功!')
})
}
```
* 方法二(优雅,Promise)
1. actions里面定义方法，方法名、参数同上，但返回一个`Promise对象`
```javaScript
return new Promise((resolve, reject) => {
  setTimeout(() => {
    context.commit('updateInfo')
    resolve('OK')
  }, 1000)
})
```
2. App里面使用action操，通过.then()或者.catch()回调返回的成功/失败的信息
```javaScript
changeInfo() {
this.$store.dispatch('aUpdateInfo', '这是action的payload')
  .then(res => console.log('修改成功',res))
})
```
### 七、Vuex的modules模块
#### 7.1 认识modules
1. Vue使用单一状态树，那么也意味着很多状态都会交给Vuex来管理.
2. 当应用变得非常复杂时，store对象就有可能变得相当腑肿
3. 为了解决这个问题，Vuex允许我们将store分割成模块（Module），而每个模块拥有自己的state、mutations、actions、getters等
#### 7.2 定义modules
```javaScript
const moduleA = {
  state: {},
  mutations: {},
  actions: {},
  getters: {}
}
const store = new Vuex.Store({
  modules: {
    a: moduleA
  }
})
```
#### 7.3 使用modules时
1. 使用modules里的state
* 使用`{{$store.state.a.name}}`获取模块a里的数据  
* 实际上，modules将a模块的state**作为对象**放到store对象的state里了
2. 使用modules里的mutation、getters
* 同样的操作，因为`模块里的mutation、getters名字和store的不能相同!`
3. 使用modules里的getters，1、2个参数类似，还有3个参数的操作
```javaScript
addStr3(state, getters, rootState) {
  return getters.addStr2 +rootState.counter
}
```
4. 使用modules里的actions，同理，而且**context参数**多了些属性如:`.rootState`,`.rootGetters`
* 如：ES6的对象语法,**对象的属性名必须一致，顺序随便**
```javaScript
const obj = {
  name: 'abc',
  age: 18,
  address: 'China'
}
const {name, age, address} = obj
```
* modules里的actions的写法：参数除了是`context`，还能是一个`对象`,**按需传入context的属性**
```javaScript
addRootSum({state, commit, rootState}) {...}
```
### 八、优化Vuex-store的文件夹组织
#### 8.1 对index.js抽离优化
1. 先定义一个**state对象**保存Vuex的state数据
2. 对`getters,mutations,actions`进行抽离，保存到**store对应名字的js文件**里
3. 对`modules`抽离，在store里新建**modules文件夹**，里面新建**各种module的js**文件
4. 在index.js里**导入**并**使用**
```javaScript
import getters from './getters'
import mutations from './mutations'
import actions from './actions'
import moduleA from './modules/moduleA'
```
5. 最终store对象的效果
```javaScript
// const state = {...}  state数据
const store = new Vuex.Store({
  state, getters, mutations, actions,
  modules: {
    a: moduleA
  }
})
export default store
```