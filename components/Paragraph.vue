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

p {
  margin-top: $p-margin-top;
  margin-bottom: $p-margin-bottom;
  text-indent: $p-text-indent;
}

.p-wrapper {
  margin-bottom: $p-wrapper-margin-bottom;
}

.no-indent {
  text-indent: unset !important;
}

.lead-in {
  text-transform: uppercase;
  letter-spacing: $leadin-letter-spacing;
  font-size: $leadin-font-size;
}

.initial::first-letter {
  font-size: 150%;
}
</style>
