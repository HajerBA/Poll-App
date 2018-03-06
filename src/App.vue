<template>
  <div id="app">
    <answer></answer>
  </div>
</template>

<script>
import answer from './components/answer'

export default {
  name: 'App',
  components: {
    answer
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
