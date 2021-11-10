<template>
  <div>
    <Spread
      v-for="(spread, spread_index) in contents.spreads"
      :key="spread_index"
      :number="spread.number"
    >
      <Page v-for="(page, page_index) in spread.pages" :key="page_index">
        <Aphorism
          v-for="(aphorism, aphorism_index) in page.aphorisms"
          :key="aphorism_index"
          :title="aphorism.title"
          :text="aphorism.text"
        />
      </Page>
    </Spread>
  </div>
</template>

<script>
import Page from '@/components/book/Page.vue'
import Spread from '@/components/book/Spread.vue'
import Aphorism from '@/components/custom/on-self/Aphorism.vue'

const contents = {
  spreads: [
    {
      number: '3',
      pages: [
        {
          aphorisms: [
            {
              title: 'Zero',
              text:
                'Whenever you find yourself building morals, defining good and evil, hell and heaven, god and devil, black and white, wrong and right — remind yourself how awful it smells, how it’s all imaginary castles, fantasies, lies, deception. There are no such things among the stars. Remind yourself to not believe in greater meanings, but to believe in opinions, intents, actions, consequences. Let your actions be born out of no high matter, let yourself be the way you are — chaotic, unpredictable, sparks around the bonfire, here and now.',
            },
          ],
        },
        {
          aphorisms: [],
        },
      ],
    },
  ],
}

export default {
  layout: 'book',
  components: {
    Page,
    Spread,
    Aphorism,
  },
  data() {
    return {
      contents,
    }
  },
  head() {
    return {
      title: '',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: '',
        },
      ],
    }
  },
}
</script>
