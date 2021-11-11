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
            {
              title: 'Whatever lets you sleep at night',
              text:
                'Well, there are people who are damn rich, people who are damn hot, people who are praised for their personality and relationships with other people, there are people of many virtues, people whose deeds are piercing heavens and shining like stars — and then there is you, the observer, the judge. How come it you are so hard on yourself? Well, being a human, it’s natural to have human perspectives, but look the other way, see with the eyes of the nature: you are living, isn’t that enough? Aren’t you experiencing the same way from point B to point D as all other people do? Surely things are different for everyone, but at the very core it’s all the same shit, really.',
            },
            {
              title: 'On good singing',
              text:
                'It seems to me that no matter how mediocre the music or lyrics are, one can always make a good song if they put all their soul, emotions and energy into singing. Good music and lyrics would certainly help, but feelings is what makes the largest difference. This also seems to be true for any other medium — you can always tell if one does the thing wholeheartedly.',
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
