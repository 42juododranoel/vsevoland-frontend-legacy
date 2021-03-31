<template>
  <div class="mart">
    <div class="row">
      <div class="col">
        <NuxtLink :to="link">
          <div class="mart-content">
            <slot />
          </div>
          <div class="mart-title">
            <Spacer size="interline" />
            <Heading2 :inner="title" />
          </div>
        </NuxtLink>
      </div>
    </div>
    <Spacer size="two-lines" />
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
