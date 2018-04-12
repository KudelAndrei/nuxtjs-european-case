<template>
  <div id="app">
    <Header />
    <Store />
    <Now />
    <Director />
    <Speak />
    <Profit />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Store from './components/Store.vue'
import Now from './components/Now.vue'
import Director from './components/Director.vue'
import Speak from './components/Speak.vue'
import Profit from './components/Profit'

export default {
  name: 'app',
  head: {
    title: "Софатекс - одежда для мебели"
  },
  components: {
    Header,
    Store,
    Now,
    Director,
    Speak,
    Profit
  }
}
</script>

<style lang="sass">
  @import '/assets/styles/style.sass'
</style>
