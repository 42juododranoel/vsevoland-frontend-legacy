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

// $h2-font-size: 36px;
// $h2-line-height: 54px;
// $h2-margin-top: -20px;
// $h2-margin-bottom: -13px;
// $h2-wrapper-margin-bottom: 60px;

$element-properties: (
  font-size: (
    36px,
    36px,
    45px,
  ),
  line-height: (
    #{$line-height},
    #{$line-height},
    #{$line-height},
  ),
  margin-top: (
    -23px,
    -23px,
    -27px,
  ),
  margin-bottom: (
    -13px,
    -13px,
    -17px,
  ),
);

$wrapper-properties: (
  margin-bottom: (
    37px,
    37px,
    98px,
  ),
);

@include set-properties('h2', $element-properties, $wrapper-properties);
</style>
