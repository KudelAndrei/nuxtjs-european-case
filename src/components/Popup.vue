<template>
  <span @click='openModal'>click</span>
</template>

<script>

export default {
  name: 'ExampleModal',
  methods: {
    openModal () {
      this.$modal.show({
        template: `
            <div>Hello</div>
        `,
      }, {
        width: 300,
        height: 300
      }, {
        'before-open': this.beforeOpen,
        'before-close': this.beforeClose
      })
    },
    beforeOpen (event) {
      console.log(event)
    },
    beforeClose (event) {
      console.log(event)
    }
  }
}
</script>
