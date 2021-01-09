<template>
  <div class="display">
    <div class="display-screen"></div>
    <Heading2 :inner="caption" />
  </div>
</template>

<script>
import Heading2 from '@/components/Heading2.vue'

export default {
  name: 'Display',
  components: { Heading2 },
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

.display-screen {
  background-color: red;
  height: 75vh;
  margin-bottom: 18px;
}
</style>
