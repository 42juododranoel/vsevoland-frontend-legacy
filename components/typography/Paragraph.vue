<template>
  <div class="p-wrapper">
    <p :class="{ 'no-indent': noIndent, initial: withInitial }">
      <span v-if="leadinSize > 0" class="lead-in">{{ value.leadin }}</span>
      {{ value.content }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'Paragraph',
  props: {
    inner: {
      type: String,
      default: '',
    },
    noIndent: {
      type: Boolean,
      default: false,
    },
    withInitial: {
      type: Boolean,
      default: false,
    },
    leadinSize: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    value() {
      const words = this.inner.split(' ')
      const leadin = words.slice(0, this.leadinSize).join(' ')
      const content = words.slice(this.leadinSize).join(' ')
      return {
        leadin: this.$typograph(leadin),
        content: this.$typograph(content),
      }
    },
  },
}
</script>

<style lang="scss">
@import 'assets/css/abstracts/_variables.scss';
@import 'assets/css/abstracts/_mixins.scss';

$element-properties: (
  font-size: (
    #{$font-size-sm},
    #{$font-size-md},
    #{$font-size-lg},
  ),
  line-height: (
    #{$line-height},
    #{$line-height},
    #{$line-height},
  ),
  margin-top: (
    -10px,
    -10px,
    -16px,
  ),
  margin-bottom: (
    -7px,
    -7px,
    -9px,
  ),
  text-indent: (
    27px,
    27px,
    45px,
  ),
);

$wrapper-properties: (
  margin-bottom: (
    18px,
    18px,
    27px,
  ),
);

@include set-properties('p', $element-properties, $wrapper-properties);

.initial::first-letter {
  font-size: 150%;
}

.no-indent {
  text-indent: unset;
}

// .lead-in {
//   text-transform: uppercase;
//   letter-spacing: $leadin-letter-spacing;
//   font-size: 90%;
// }
//
</style>
