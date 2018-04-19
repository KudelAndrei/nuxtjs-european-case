<template>
  <section id="app" v-scroll-spy>
    <Header />
    <Navigation />
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
    <no-ssr>
      <Popup />
    </no-ssr>
  </section>
</template>

<script>
import Navigation from '~/components/Navigation'
import Header from '~/components/Header.vue'
import Store from '~/components/Store.vue'
import Now from '~/components/Now.vue'
import Director from '~/components/Director.vue'
import Speak from '~/components/Speak.vue'
import Profit from '~/components/Profit'
import Why from '~/components/Why'
import Brend from '~/components/Brend'
import Treaty from '~/components/Treaty'
import Block from '~/components/Block'
import Question from '~/components/Question'
import Footer from '~/components/Footer'
import Popup from '~/components/Popup'

export default {
  name: 'app',
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
    Navigation,
    Popup
  }
}
</script>

<style lang="sass">
  @import './assets/styles/style.sass'
</style>

