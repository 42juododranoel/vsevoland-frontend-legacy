<template>
  <div class="h1-wrapper">
    <h1>{{ inner }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Heading1',
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

h1 {
  font-size: $h1-font-size;
  line-height: $h1-line-height;
  margin-top: $h1-margin-top;
  margin-bottom: $h1-margin-bottom;
}

.h1-wrapper {
  margin-bottom: $h1-wrapper-margin-bottom;
}
</style>
