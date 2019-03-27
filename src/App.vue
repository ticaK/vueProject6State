<template>
  <div id="app">
   <counter-component/>
   <new-comp />
  </div>
</template>

<script>
import CounterComponent from './components/CounterComponent.vue'
import NewComp from './components/NewComp.vue'


export default {
  name: 'app',
  components: {
    CounterComponent,
    NewComp
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
