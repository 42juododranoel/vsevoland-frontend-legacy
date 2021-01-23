<template>
  <div class="li-wrapper">
    <Paragraph :inner="inner" />
    <Spacer size="1" />
  </div>
</template>

<script>
import Paragraph from '@/components/Paragraph.vue'
import Spacer from '@/components/Spacer.vue'

export default {
  name: 'ListItem',
  components: {
    Paragraph,
    Spacer,
  },
  props: {
    inner: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss">
@import 'assets/css/abstracts/_variables.scss';
</style>
