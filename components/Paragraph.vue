<template>
  <div class="p-wrapper">
    <p>{{ value }}</p>
  </div>
</template>

<script>
const Typograf = require('typograf')
const typograf = new Typograf({ locale: ['ru', 'en-US'] })

export default {
  name: 'Paragraph',
  props: {
    inner: {
      type: String,
      default: '',
    },
  },
  computed: {
    value() {
      return typograf.execute(this.inner)
    },
  },
}
</script>

<style lang="scss">
@import 'assets/css/abstracts/_variables.scss';

p {
  margin-top: $p-margin-top;
  margin-bottom: $p-margin-bottom;
  text-indent: $p-text-indent;
}

.p-wrapper {
  margin-bottom: $p-wrapper-margin-bottom;
}
</style>
