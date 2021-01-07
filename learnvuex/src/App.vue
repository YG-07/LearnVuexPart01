<template>
  <div id="app">
    <h2>{{message}}</h2>
    <h2>{{$store.state.counter}}</h2>
    <button @click="add">+</button>
    <button @click="sub">-</button>

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
  methods: {
    add() {
      this.$store.commit('increment')
    },
    sub() {
      this.$store.commit('decrement')
    }
  }
}
</script>

<style>

</style>
