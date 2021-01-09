<template>
  <div class="p-wrapper">
    <p :class="{ 'no-indent': noIndent }">{{ value }}</p>
  </div>
</template>

<script>
export default {
  name: 'Paragraph',
  props: {
    inner: {
      type: String,
      default: '',
    },
    noIndent: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    value() {
      return this.$typograph(this.inner)
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

.no-indent {
  text-indent: unset !important;
}
</style>
