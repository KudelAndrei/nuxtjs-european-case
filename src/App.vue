<template>
  <div id="app">
    <!-- <Popup /> -->
    <modals-container />
    <Header />
    <Store />
    <Now />
    <Director />
    <Speak />
    <Profit />
    <Why />
    <Brend />
    <Treaty />
    <Block />
    <Question />
    <Footer />
  </div>
</template>

<script>
import Popup from './components/Popup'
import Header from './components/Header.vue'
import Store from './components/Store.vue'
import Now from './components/Now.vue'
import Director from './components/Director.vue'
import Speak from './components/Speak.vue'
import Profit from './components/Profit'
import Why from './components/Why'
import Brend from './components/Brend'
import Treaty from './components/Treaty'
import Block from './components/Block'
import Question from './components/Question'
import Footer from './components/Footer'

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
    Profit,
    Why,
    Brend,
    Treaty,
    Block,
    Question,
    Footer,
    Popup
  }
}
</script>

<style lang="sass">
  @import '/assets/styles/style.sass'
</style>
