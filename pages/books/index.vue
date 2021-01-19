<template>
  <div class="container">
    <div class="row">
      <NuxtLink to="/books/to-self">
        <div class="col-12">
          …
        </div>
        <div class="col-4">
          <Heading3 inner="К себе" />
        </div>
      </NuxtLink>
    </div>
    <div class="row">
      <div class="col-4">
        <NuxtLink to="/books/the-dragonrider-and-the-witch">
          <Heading3 inner="Всадник и Ведьма" />
        </NuxtLink>
      </div>
      <div class="col-12">
        <NuxtLink to="/books/the-dragonrider-and-the-witch">…</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
}
</script>
