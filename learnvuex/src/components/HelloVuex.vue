<template>
  <div>
    <h2>这是HelloVuex组件</h2>
    <h2>{{$store.state.counter}}</h2>
  </div>
</template>

<script>
  export default {
    name: "HelloVuex",
    // props: {counter: Number}
  }
</script>

<style scoped>

</style>