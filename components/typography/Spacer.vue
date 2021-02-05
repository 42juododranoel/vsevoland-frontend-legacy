<template>
  <div :class="classes" />
</template>

<script>
export default {
  name: 'Spacer',
  props: {
    size: {
      type: String,
      default: '',
    },
  },
  computed: {
    classes() {
      return 'spacer-' + this.size
    },
  },
}
</script>

<style lang="scss">
@import 'assets/css/abstracts/_variables.scss';

.spacer-interline {
  margin-bottom: 18px;
}
.spacer-one-line {
  margin-bottom: 45px;
}
.spacer-two-lines {
  margin-bottom: 72px;
}
.spacer-three-lines {
  margin-bottom: 99px;
}
</style>
