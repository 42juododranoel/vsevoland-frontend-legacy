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
                'Whenever you find yourself building morals, defining good and evil, hell and heaven, god and devil, black and white, wrong and right — remind yourself how awful it smells, how it’s all imaginary castles, fantasies, lies, deceptions. There are no such things among the stars. Remind yourself to not believe in greater meanings, but to believe in opinions, intents, actions, consequences. Let your actions be born out of no high matter, let yourself be the way you are — chaotic, unpredictable, sparks around the bonfire, here and now.',
            },
            {
              title: 'Whatever lets you sleep at night',
              text:
                'Well, there are people who are damn rich, people who are damn hot, people who are praised for their personality and relationships with other people, there are people of many virtues, people whose deeds are piercing heavens and shining like stars — and then there is you, the observer, the judge. How come it you are so hard on yourself? Well, being a human, it’s natural to have human perspectives, but look the other way, see with the eyes of the nature: you are living, isn’t that enough? Aren’t you experiencing the same way from point B to point D as all other people do? Surely things are different for everyone, but at the very core it’s all the same shit, really.',
            },
            {
              title: 'It takes some ignorance',
              text:
                'It seems to me that life feels brightest — or at least strangest — not when you feel like black is black and white is white, but when you can’t tell which grey is greyer. Sometimes things blur, they leave you wondering: was that a good thing, a bad thing, is it me being limited and me being unjust, is it world getting crazier and people shallower, or are they being reasonable, while I am living in my somehow flawed inner universe? You don’t have anything else to trust rather than youself, yet even that is hard — it takes some courage to trust yourself, it takes some ignorance to stand your ground while knowing that at the end of the day this ground may not be what you wish it was.',
            },
          ],
        },
        {
          aphorisms: [
            {
              title: 'The vessel',
              text:
                'It seems to me that the best way to withstand all hardships of life is to think of myself as of some kind of vessel. It feels cringy to admit that some time ago I was sure that my life was like an arrow striving to reach some Goal, to maintain some direction, but it seems to be far from truth, for having a steady direction is the one thing I can’t afford. And I thought: well then, perhaps my life is  more of a chaos? Like emptiness? Like void? I feel enigmatic so often, shouldn’t that be the case? Well, it wasn’t. Thinking so divine about myself was merely an act of desperation, I was just trying to find some reasons to avoid understanding myself. Now it seems to me that I am a vessel, a cauldron, some kind of storage, which is constantly filled with thoughts, emotions, actions. The life throws all kinds of things in me, some things feel good and I take pride in them, but some other things are hard to accept as part of me, yet they clearly are — the inability to do so may lead to disastrous consequences. How do I accept them? Well, I am not these things, I am but a vessel, which stores them inside.',
            },
            {
              title: 'On good singing',
              text:
                'It seems to me that no matter how mediocre the music or lyrics are, one can always make a good song if they put all their soul, emotions and energy into singing. Good music and lyrics would certainly help, but feelings is what makes the largest difference. This also seems to be true for any other medium — you can always tell if one does the thing wholeheartedly.',
            },
          ],
        },
      ],
    },

    {
      number: '4',
      pages: [
        {
          aphorisms: [
            {
              title: 'The kind of question you ask',
              text:
                'For years I was asking myself: “What is the point of living? Why can’t people tell me conscisly what it is?” Well, very few people ask this question, even less people know the answer. It’s not the kind of question which you ask, it’s the kind of question which you answer. It’s plain and simple: there is no meaning. But it’s just the beginning, a blank canvas, for you can create your own meaning. But will you?',
            },
            {
              title: 'It’s you I like',
              text:
                'Fred Rogers was probably the kindest person in human history. His great wisdom is to love people the way they are. “It’s not the things you wear, it’s not the way you do your hair, but it’s you I like” — I can’t even express how powerful are these words. I wish to learn to be like that.',
            },
            {
              title: 'The depth of perception',
              text:
                'Is there at least one tiny little piece of life, however dark it may be, which you wouldn’t be able to love, to find some beauty in it, if you wanted to? There isn’t. Let people touch this part of you — would they just call you names and leave for good, or would they admire you and say they haven’t seen such depth of perception before? It feels good to be with people of same depth as yours, but rarely they are sane.',
            },
          ],
        },
        {
          aphorisms: [
            {
              title: 'This very moment',
              text:
                'Marcus Aurelius said that a human doesn’t have anything, but this very moment. This truth was told by many. It’s curious that the following is also truth: there is no large difference between a life of one year and a life of hundred years, for in both there’s pretty much nothing more than this very moment. Yep, it feels good to be human, to be transient, it also feels good to be transhuman and to be eternal, but basically it’s all the same this very moment.',
            },
            {
              title: 'Expectations',
              text:
                'It’s good to have no expectations, for you won’t have to get all upset when something again doesn’t work out the way you would like to. But you are a human. How can you have no expectations? Surely you will, this is fine, it makes life easier sometimes, it makes life brighter. But don’t get too cocky. Whenever you are expecting certain things to happen, you are doing a little crime against the beauty of the world.',
            },
          ],
        },
      ],
    },
    {
      number: '5',
      pages: [
        {
          aphorisms: [
            {
              title: 'How I Ruined My Stoicism',
              text:
                'Epictetus said that there are things in the world which you can’t control — don’t worry about them, don’t be anxious, try to care more about the thing you can control — your perception of them. But hey, isn’t that too simple for you? Aren’t you smarter than that? Yep, you are. Here it comes: there is also beauty in being anxious about things you can’t control. Are you satisfied? It seems that the mind of philosopher again works against the philosopher. Go figure. Or go struggle, perhaps?',
            },
            {
              title: 'War never changes',
              text:
                'The ugliest parts of humanity are seen in wars. There are wars like the USA’s abolition war, which may seem to be good and righteous on the surface, but it’s just the surface, trust me, no war is pretty on the inside. The metaphysical war, the encyclopedian war is very different from the war where soldiers rape women and kill each other and burn cities. Remember it, don’t even try to think that a war can be justified.',
            },
            {
              title: 'Catchy titles',
              text:
                'Nietzsche’s titles: “Human, All Too Human: A Book for Free Spirits”, “The Gay Science”, “Thus Spoke Zarathustra: A Book for All and None”, “Beyound Good and Evil: A Prelude to a Philosophy of the Future”, “Twilight of the Idols, or, How to Philosophize with a Hammer”, “The Antichrist”, “Ecce Homo: How One Becomes What One Is”. I just want to ask, how can one create such cool titles? Is it possible to learn this power?',
            },
          ],
        },
        {
          aphorisms: [
            {
              title: 'Shame on you',
              text:
                'People do shaming when they understand how little control they have over you, but don’t want you to also understand it. It smells awful, it smells like a manipulation, the kind of thing a good person would hesitate to do.',
            },
            {
              title: 'Stoics on illness',
              text:
                'It is said that everything happening is a part of nature. You have a toothache and you feel bad, but why do you feel bad? Because you physically don’t like this pain, or because you don’t like the fact of that unfortune happening to you? I hope former, because the latter sounds like you think that only good things should always happen to you?',
            },
            {
              title: 'F.I.L.O.',
              text: 'Knowledge of self shines brighter than all — that’s what Shingo Annen said.',
            },
          ],
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
