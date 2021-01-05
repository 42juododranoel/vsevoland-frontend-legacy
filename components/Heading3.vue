<template>
  <div class="h3-wrapper">
    <h3>{{ inner }}</h3>
  </div>
</template>

<script>
export default {
  name: 'Heading3',
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

h3 {
  font-size: $h3-font-size;
  line-height: $h3-line-height;
  margin-top: $h3-margin-top;
  margin-bottom: $h3-margin-bottom;
}

.h3-wrapper {
  margin-bottom: $h3-wrapper-margin-bottom;
}
</style>
