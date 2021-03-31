<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-9-md">
          <Heading1 :inner="title" />
          <Paragraph no-indent="true" :inner="lead" />
          <Spacer size="one-line" />
        </div>
      </div>
      <div class="row">
        <div class="col">
          <Figure
            v-for="(figure, figure_index) in contents"
            :key="figure_index"
            :caption="figure.caption"
          >
            <Picture
              :source="figure.picture.source"
              :width="figure.picture.width"
              :height="figure.picture.height"
            />
          </Figure>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Heading1 from '@/components/typography/Heading1.vue'
import Paragraph from '@/components/typography/Paragraph.vue'
import Figure from '@/components/typography/Figure.vue'
import russia from '@/constants/russia.js'

export default {
  components: {
    Heading1,
    Paragraph,
    Figure,
  },
  data() {
    const region = this.$route.params.region
    return russia[region]
  },
  head() {
    return {
      title: this.title,
    }
  },
}
</script>
