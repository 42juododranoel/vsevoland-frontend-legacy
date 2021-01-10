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
      return this.size + '-below'
    },
  },
}
</script>

<style lang="scss">
@import 'assets/css/abstracts/_variables.scss';

.interline-below {
  margin-bottom: $interline !important;
}
.big-interline-below {
  margin-bottom: $big-interline !important;
}

.one-line-below {
  margin-bottom: $one-line !important;
}
.two-lines-below {
  margin-bottom: $two-lines !important;
}
.three-lines-below {
  margin-bottom: $three-lines !important;
}
</style>
