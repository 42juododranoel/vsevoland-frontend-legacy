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
    54px,
    54px,
    63px,
  ),
  line-height: (
    #{$line-height},
    #{$line-height},
    #{$line-height},
  ),
  margin-top: (
    -28px,
    -28px,
    -37px,
  ),
  margin-bottom: (
    -18px,
    -18px,
    -23px,
  ),
);

$wrapper-properties: (
  margin-bottom: (
    74px,
    74px,
    74px,
  ),
);

@include set-properties('h1', $element-properties, $wrapper-properties);
</style>
