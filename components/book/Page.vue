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
      padding-top: $page-first-top-padding-sm;
      padding-bottom: $page-first-bottom-padding-sm;
      padding-left: $page-outer-padding-sm;
      padding-right: $page-inner-padding-sm;
    }

    &:last-of-type {
      grid-row: 2;
      padding-top: $page-last-top-padding-sm;
      padding-bottom: $page-last-bottom-padding-sm;
      padding-left: $page-inner-padding-sm;
      padding-right: $page-outer-padding-sm;
    }
  }
}

@include media-breakpoint-up($width-md) {
  .page {
    grid-row: 1;

    padding-top: $page-top-padding-md;
    padding-bottom: $page-bottom-padding-md;

    &:first-of-type {
      grid-column: 1;
      padding-left: $page-outer-padding-md;
      padding-right: $page-inner-padding-md;
    }

    &:last-of-type {
      grid-column: 2;
      padding-left: $page-inner-padding-md;
      padding-right: $page-outer-padding-md;
    }
  }
}
</style>
