<template>
  <div class="picture-wrapper">
    <picture>
      <img :src="source" />
    </picture>
  </div>
</template>

<script>
export default {
  name: 'Picture',
  props: {
    source: {
      type: String,
      default: '',
    },
  },
}
</script>
