<template>
  <div class="cover">
    <h1 class="titles">
      <div class="titles__title">{{ title }}</div>
      <div class="titles__or">or,</div>
      <div class="titles__subtitle">{{ subtitle }}</div>
    </h1>
  </div>
</template>

<script>
export default {
  name: 'Cover',
  props: {
    title: {
      type: String,
      default: '',
    },
    subtitle: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss">
.cover {
  height: 100vh;
  display: grid;
  border-bottom: 1px solid #bebebe;

  & .titles {
    text-align: center;
    width: 100vw;
    margin: auto 0;
    padding-bottom: 150px;

    &__title {
      font-size: 144px;
      text-transform: uppercase;
      letter-spacing: 30px;
      margin-right: -20px;
    }

    &__or {
      font-size: 36px;
      padding-bottom: 10px;
    }

    &__subtitle {
      font-size: 72px;
      font-style: italic;
    }
  }
}
</style>
