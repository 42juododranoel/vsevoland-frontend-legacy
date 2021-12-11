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

  .titles {
    text-align: center;
    margin: auto 0;
    padding-bottom: 150px;

    .titles__title {
      font-size: 144px;
      text-transform: uppercase;
      letter-spacing: 30px;
    }

    .titles__or {
      font-size: 36px;
      padding-bottom: 10px;
    }

    .titles__subtitle {
      font-size: 72px;
      font-style: italic;
    }
  }
}
</style>
