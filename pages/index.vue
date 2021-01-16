<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-10-md">
          <Display caption="Это подпись к большой картинке" />
        </div>
        <div class="col-6-md">
          blah
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Display from '@/components/Display.vue'

export default {
  components: {
    Display,
  },
}
</script>

<style></style>
