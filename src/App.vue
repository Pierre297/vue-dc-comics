<template>
  <div id="app">
    <Header/>
    <Main/>
    <Footer/>

  </div>
</template>

<script>
import Header from './components/Testata.vue '
import Main from './components/Principale.vue '
import Footer from './components/Piepagina.vue '

export default {
  name: 'App',
  components: {
    Header,
    Main,
    Footer,
  },
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
