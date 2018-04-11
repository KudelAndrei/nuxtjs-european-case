<template>
  <div id="app">
    <Header />
  </div>
</template>

<script>
import Header from './components/Header.vue'

export default {
  name: 'app',
  head: {
    title: "Софатекс - одежда для мебели"
  },
  components: {
    Header
  }
}
</script>

<style lang="sass">
  @import '/assets/styles/style.sass'
</style>
