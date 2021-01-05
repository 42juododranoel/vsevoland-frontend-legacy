<template>
  <div class="h2-wrapper">
    <h2>{{ inner }}</h2>
  </div>
</template>

<script>
export default {
  name: 'Heading2',
  props: {
    inner: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss">
@import 'assets/css/abstracts/_variables.scss';

h2 {
  font-size: $h2-font-size;
  line-height: $h2-line-height;
  margin-top: $h2-margin-top;
  margin-bottom: $h2-margin-bottom;
}

.h2-wrapper {
  margin-bottom: $h2-wrapper-margin-bottom;
}
</style>
