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
  computed: {
    value() {
      return this.$typograph(this.inner)
    },
  },
}
</script>

<style lang="scss">
@import 'assets/css/abstracts/_variables.scss';
@import 'assets/css/abstracts/_mixins.scss';

$element-properties: (
  font-size: (
    var(--p-font-size),
    var(--p-font-size),
    var(--p-font-size),
  ),
  line-height: (
    #{$line-height},
    #{$line-height},
    #{$line-height},
  ),
  margin-top: (
    -10px,
    -10px,
    -15px,
  ),
  margin-bottom: (
    var(--p-margin-bottom),
    var(--p-margin-bottom),
    var(--p-margin-bottom),
  ),
);

$wrapper-properties: (
  margin-bottom: (
    17px,
    17px,
    24px,
  ),
);

@include set-properties('h3', $element-properties, $wrapper-properties);
</style>
