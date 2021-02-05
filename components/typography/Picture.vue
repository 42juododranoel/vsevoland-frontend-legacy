<template>
  <div class="picture-wrapper">
    <picture>
      <img :src="link" />
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
  computed: {
    link() {
      return 'https://cdn.vsevo.land' + this.source
    },
  },
}
</script>
