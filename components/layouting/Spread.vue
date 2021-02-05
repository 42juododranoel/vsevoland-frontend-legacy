<template>
  <div class="spread">
    <div class="spread-content">
      <div class="spread-header"></div>
      <div :class="classes">
        <slot />
      </div>
      <div class="spread-footer">
        <span v-if="number" class="spread-number">{{ number }}</span>
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
    content: {
      type: String,
      default: 'pages',
    },
  },
  computed: {
    classes() {
      return 'spread-' + this.content
    },
  },
}
</script>

<style lang="scss">
@import 'assets/css/abstracts/_variables.scss';
@import 'assets/css/abstracts/_mixins.scss';

.spread-number {
  float: right;
}

.spread {
  border-bottom: 1px solid #bebebe;
  grid-template-rows: minmax(100vh, min-content);
}

.spread,
.spread-content,
.spread-pages {
  display: grid;
}

.spread-splash {
  grid-template-columns: 1fr;
}

@include media-breakpoint-between($width-sm, $width-md) {
  .spread-content {
    grid-template-rows: $spread-header-size-sm 1fr $spread-footer-size-sm;
  }
  .spread-pages {
    grid-template-columns: 1fr;
  }
  .spread-footer {
    padding-left: $spread-outer-size-sm;
    padding-right: $spread-outer-size-sm;
  }
}

@include media-breakpoint-up($width-md) {
  .spread-content {
    grid-template-rows: $spread-header-size-md 1fr $spread-footer-size-md;
  }
  .spread-pages {
    grid-template-columns: 1fr 1fr;
  }
  .spread-footer {
    padding-left: $spread-outer-size-md;
    padding-right: $spread-outer-size-md;
  }
}
</style>
