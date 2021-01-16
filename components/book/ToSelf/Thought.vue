<template>
  <div>
    <Heading3 :inner="title" />
    <Paragraph :inner="text" no-indent="true" />
    <Spacer size="one-line" />
  </div>
</template>

<script>
import Heading3 from '@/components/Heading3.vue'
import Paragraph from '@/components/Paragraph.vue'
import Spacer from '@/components/Spacer.vue'

export default {
  name: 'Thought',
  components: {
    Heading3,
    Paragraph,
    Spacer,
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
