<template>
  <div class="spread">
    <div class="spread__content">
      <div class="spread__header"></div>
      <div class="spread__pages">
        <slot />
      </div>
      <div class="spread__footer">
        <span v-if="number" class="spread__number">{{ number }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Spread',
  props: {
    number: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss">
@import 'assets/css/abstracts/_variables.scss';
@import 'assets/css/abstracts/_mixins.scss';

.spread {
  display: grid;
  border-bottom: 1px solid #bebebe;
  grid-template-rows: minmax(100vh, min-content);

  &__number {
    float: right;
  }

  &__content,
  &__pages {
    display: grid;
  }
}

@include media-breakpoint-sm() {
  .spread {
    &__content {
      grid-template-rows: $spread-header-size-sm 1fr $spread-footer-size-sm;
    }
    &__pages {
      grid-template-columns: 1fr;
    }
    &__footer {
      padding-left: $page-outer-padding-sm;
      padding-right: $page-outer-padding-sm;
    }
  }
}

@include media-breakpoint-md-up() {
  .spread {
    &__content {
      grid-template-rows: $spread-header-size-md 1fr $spread-footer-size-md;
    }
    &__pages {
      grid-template-columns: 1fr 1fr;
    }
    &__footer {
      padding-left: $page-outer-padding-md;
      padding-right: $page-outer-padding-md;
    }
  }
}
</style>
