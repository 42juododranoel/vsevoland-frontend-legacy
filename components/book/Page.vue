<template>
  <div :id="id" class="page">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Page',
  props: {
    id: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss">
@import 'assets/css/abstracts/_variables.scss';
@import 'assets/css/abstracts/_mixins.scss';

@include media-breakpoint-between($width-sm, $width-md - 1px) {
  .page {
    grid-column: 1;

    &:first-of-type {
      grid-row: 1;
      padding-left: $spread-outer-size-sm;
      padding-right: $page-inner-padding-sm;
    }

    &:last-of-type {
      grid-row: 2;
      padding-left: $page-inner-padding-sm;
      padding-right: $spread-outer-size-sm;
    }
  }
}

@include media-breakpoint-up($width-md) {
  .page {
    grid-row: 1;

    &:first-of-type {
      grid-column: 1;
      padding-left: $spread-outer-size-md;
      padding-right: $page-inner-padding-md;
    }

    &:last-of-type {
      grid-column: 2;
      padding-left: $page-inner-padding-md;
      padding-right: $spread-outer-size-md;
    }
  }
}
</style>
