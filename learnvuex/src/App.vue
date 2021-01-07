<template>
  <div id="app">
    <h2>{{message}}</h2>
    <h2>{{$store.state.counter}}</h2>
    <button @click="add">+</button>
    <button @click="sub">-</button>

    <h2>App的操作：获取的getters数据</h2>
    <p>{{pow}}</p>
    <h2>案例：App获取及格的学生信息</h2>
    <div>
      <h3>获取及格学生的信息</h3>
      <p>{{passStus}}</p>
      <h3>获取及格学生的个数</h3>
      <!-- <p>{{passStus.length}}</p> -->
      <p>{{$store.getters.passStudentsLength}}</p>
      <h3>通过名字获取某个学生的信息</h3>
      <p>{{$store.getters.nametoStu('Tom')}}</p>
    </div>
    <!-- <hello-vuex :counter="counter"/> -->
    <hello-vuex/>
  </div>
</template>

<script>
import HelloVuex from './components/HelloVuex'

export default {
  components: { HelloVuex },
  name: 'App',
  data() {
    return {
      message: 'Helle Vuex!'
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
      this.$store.commit('increment')
    },
    sub() {
      this.$store.commit('decrement')
    },
  }
}
</script>

<style>

</style>
