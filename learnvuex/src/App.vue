<template>
  <div id="app">
    <h2>{{message}}</h2>
    <h2>{{$store.state.counter}}</h2>
    <button @click="add">+</button>
    <button @click="sub">-</button>
    <div>
      <input type="number" v-model="addNum">
      <span>数字为：{{Number(addNum)}}</span>
      <button @click="addCount(Number(addNum))">+{{addNum}}</button>
    </div>
    <div>
      <label for="no">
        学号：<input id='no' type="text" size="6" v-model="in1">
      </label>
      <label for="stuName">
        姓名：<input id="stuName" type="text" size="8" v-model="in2">
      </label>
      <label for="score">
        分数:<input id='score' type="text" size="3" v-model="in3">
      </label>
      <button @click="addStu()">添加学生信息</button>
    </div>
    

    <h2>App的操作：获取的getters数据</h2>
    <p>{{pow}}</p>
    <h2>Hello Vuex组件的内容</h2>
    <hello-vuex/>
    <!-- <hello-vuex :counter="counter"/> 不是响应式-->
    
    <div>
      <h2>案例：App获取及格的学生信息</h2>
      <h3>获取及格学生的信息</h3>
      <p>{{passStus}}</p>
      <h3>获取及格学生的个数</h3>
      <!-- <p>{{passStus.length}}</p> -->
      <p>{{$store.getters.passStudentsLength}}</p>
      <h3>通过名字获取某个学生的信息</h3>
      <p>{{$store.getters.nametoStu('Tom')}}</p>
    </div>

    <div>
      <h2>Vuex的响应式原理</h2>
      <p>{{$store.state.info}}</p>
      <button @click="changeInfo">修改信息</button>
    </div>
    <div>
      <h2>Vuex的modules中的内容</h2>
      <p>moduleA的nmae：{{$store.state.a.name}}</p>
      <button @click="updateName">修改模块a的name</button>
      <h3>{{$store.getters.addStr}}</h3>
      <h3>{{$store.getters.addStr2}}</h3>
      <h3>{{$store.getters.addStr3}}</h3>
      <button @click="asyncUpName">异步修改模块a的name</button>
    </div>
  </div>
</template>

<script>
import HelloVuex from './components/HelloVuex'
import {
  INCREMENT,
  DECREMENT
} from './store/mutations-types'

export default {
  components: { HelloVuex },
  name: 'App',
  data() {
    return {
      message: 'Helle Vuex!',
      addNum: 0,
      in1:'',
      in2:'',
      in3:''
    }
  },
  computed: {
    pow() {
      return this.$store.getters.powerCounter
    },
    passStus() {
      return this.$store.getters.passStudents
    }
  },
  methods: {
    add() {
      this.$store.commit(INCREMENT)
    },
    sub() {
      this.$store.commit(DECREMENT)
    },
    addCount(count) {
      // this.$store.commit('incrementCount', count)
      this.$store.commit({
        type:'incrementCount',
        count
      })
    },
    addStu() {
      //不是最优的方法，构建对象
      const aStu = {}
      aStu['id']=Number(this.in1)
      aStu['name']=this.in2
      aStu['score']=Number(this.in3)
      console.log(aStu);
      this.$store.commit('addStudent', aStu)
    },
    changeInfo() {
      // this.$store.commit('updateInfo')
      // this.$store.dispatch('aUpdateInfo', '这是action的payload')
      // 1.方法一
      // this.$store.dispatch('aUpdateInfo', {
      //   message: '这是action的payload',
      //   success: () => console.log('修改成功!')
      // })
      // 2.方法二
      this.$store.dispatch('aUpdateInfo', '这是action的payload')
        .then(res => console.log('修改成功',res))
    },
    updateName() {
      this.$store.commit('updateName', 'Jick')
    },
    asyncUpName() {
      this.$store.dispatch('aUpdateName')
    }
  }
}
</script>

<style>

</style>
