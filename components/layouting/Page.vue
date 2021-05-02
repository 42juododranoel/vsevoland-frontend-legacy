<template>
  <div class="page">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Page',
}
</script>

<style lang="scss">
@import 'assets/css/abstracts/_variables.scss';
@import 'assets/css/abstracts/_mixins.scss';

@include media-breakpoint-sm() {
  .page {
    grid-column: 1;

    &:first-of-type {
      grid-row: 1;
      padding-left: $page-outer-padding-sm;
      padding-right: $page-inner-padding-sm;
    }

    &:last-of-type {
      grid-row: 2;
      padding-left: $page-inner-padding-sm;
      padding-right: $page-outer-padding-sm;
    }
  }
}

@include media-breakpoint-md-up() {
  .page {
    grid-row: 1;

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
