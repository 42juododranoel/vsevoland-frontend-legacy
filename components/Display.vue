<template>
  <div class="display">
    <img :src="url" />
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
    url: {
      type: String,
      default: '',
    },
  },
}
</script>
