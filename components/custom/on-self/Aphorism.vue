<template>
  <div class="aphorism">
    <Heading3 :inner="title" />
    <Paragraph :inner="text" no-indent="true" />
  </div>
</template>

<script>
import Heading3 from '@/components/typography/Heading3.vue'
import Paragraph from '@/components/typography/Paragraph.vue'

export default {
  name: 'Aphorism',
  components: {
    Heading3,
    Paragraph,
  },
  props: {
    title: {
      type: String,
      default: '',
    },
    text: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss">
.aphorism {
  margin-bottom: 45px;
}
</style>
