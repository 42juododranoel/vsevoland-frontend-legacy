<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <p v-if="$fetchState.pending">Fetching comic...</p>
        <p v-else-if="$fetchState.error">An error occurred {{ $fetchState.error }}</p>
        <div v-else>
          <Picture :source="url" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Picture from '@/components/typography/Picture.vue'

export default {
  components: { Picture },

  async fetch() {
    this.response = await fetch(
      'http://localhost:3000/api/v1/comics/' + this.$route.params.slug
    ).then((response) => response.json())
  },

  data() {
    return {
      response: [],
    }
  },

  computed: {
    url() {
      return '/comics/gay-play-studios/' + this.response.slug + '.png'
    },
  },
}
</script>
