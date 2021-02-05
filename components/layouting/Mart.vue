<template>
  <div class="mart">
    <NuxtLink :to="link">
      <div class="mart-content">
        <slot />
      </div>
      <div class="mart-title">
        <Spacer size="interline" />
        <Heading2 :inner="title" />
      </div>
      <Spacer size="two-lines" />
    </NuxtLink>
  </div>
</template>

<script>
import Spacer from '@/components/typography/Spacer.vue'

export default {
  name: 'Mart',
  components: { Spacer },
  props: {
    title: {
      type: String,
      default: '',
    },
    link: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss"></style>
