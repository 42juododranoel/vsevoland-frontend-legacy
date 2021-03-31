<template>
  <div class="picture-wrapper" :style="{ maxWidth }">
    <div class="picture-wrapper-outer" :style="{ paddingBottom }">
      <div class="picture-wrapper-inner">
        <picture>
          <img :src="link" />
        </picture>
      </div>
    </div>
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
    width: {
      type: Number,
      default: 0,
    },
    height: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      imageHeight: 250,
      imageWidth: 500,
    }
  },
  computed: {
    link() {
      return 'https://cdn.vsevo.land' + this.source
    },
    maxWidth() {
      return this.width + 'px'
    },
    paddingBottom() {
      return (this.height / this.width) * 100 + '%'
    },
  },
}
</script>

<style lang="scss">
.picture-wrapper {
  border: 1px solid #bebebe;
  background-color: #bebebe;
}

.picture-wrapper-outer {
  position: relative;
}

.picture-wrapper-inner {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
</style>
