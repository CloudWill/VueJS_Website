<template>
    <HelloWorld msg="Welcome to Your Vue.js App" /> 
    <Header></Header>
    <HelloI18n />


</template>

<script>
    import HelloWorld from './components/HelloWorld.vue'
    import HelloI18n from './components/HelloI18n.vue'
import Header from './components/Header.vue';
export default {
  name: 'App',
  components: {
      HelloWorld,
      Header,
      HelloI18n
  }
}
</script>

<style lang="scss">
    @import 'scss/homepage'
</style>
