<template>
  <div :class="className"></div>
</template>

<script>
export default {
  name: 'Spacer',
  props: {
    size: {
      type: String,
      default: 'interline',
    },
  },
  computed: {
    className() {
      return 'spacer-' + this.size
    },
  },
}
</script>

<style lang="scss">
@import 'assets/css/abstracts/_variables.scss';

.spacer-1 {
  margin-bottom: $one-line;
}
.spacer-15 {
  margin-bottom: $one-and-half-lines;
}
.spacer-2 {
  margin-bottom: $two-lines;
}
.spacer-3 {
  margin-bottom: $three-lines;
}
</style>
