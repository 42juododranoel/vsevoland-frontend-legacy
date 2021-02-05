<template>
  <figure>
    <slot />
    <Spacer size="interline" />
    <Paragraph no-indent="true" :inner="caption" />
    <Spacer size="two-lines" />
  </figure>
</template>

<script>
import Spacer from '@/components/typography/Spacer.vue'
import Paragraph from '@/components/typography/Paragraph.vue'

export default {
  name: 'Figure',
  components: {
    Paragraph,
    Spacer,
  },
  props: {
    caption: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss">
@import 'assets/css/abstracts/_variables.scss';

figure p {
  font-family: $font-family-sans;
}
</style>
