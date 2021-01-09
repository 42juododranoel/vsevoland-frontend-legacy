<template>
  <div class="spread">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Spread',
}
</script>

<style lang="scss">
@import 'assets/css/abstracts/_variables.scss';
@import 'assets/css/abstracts/_mixins.scss';

@include media-breakpoint-between($width-sm, $width-md) {
  .spread {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
  }
}

@include media-breakpoint-up($width-md) {
  .spread {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
  }
}
</style>
