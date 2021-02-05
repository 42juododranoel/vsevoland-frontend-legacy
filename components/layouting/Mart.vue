<template>
  <div class="mart">
    <div class="mart-content">
      <slot />
    </div>
    <div class="mart-title">
      <br />
      <Heading2 :inner="title" />
    </div>
    <br />
    <br />
    <br />
  </div>
</template>

<script>
export default {
  name: 'Mart',
  props: {
    title: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss">
.mart-content {
  border: 1px solid lightgrey;
}
</style>
