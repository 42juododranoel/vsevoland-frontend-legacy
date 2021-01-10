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

.spread {
  display: grid;
  grid-template-rows: minmax(100vh, min-content);
  border-bottom: 1px solid #bebebe;
}

@include media-breakpoint-between($width-sm, $width-md) {
  .spread {
    grid-template-columns: 1fr;
  }
}

@include media-breakpoint-up($width-md) {
  .spread {
    grid-template-columns: 1fr 1fr;
  }
}
</style>
