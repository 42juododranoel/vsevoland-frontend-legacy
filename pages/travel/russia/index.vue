<template>
  <div class="container">
    <div class="row">
      <div class="col-9-md">
        <Heading1 inner="Путешествую по России" />
        <Paragraph
          no-indent="true"
          inner="В 2020 году я начал путешествовать по России. Я поступаю просто: покупаю на «Туту-ру» железнодорожный билет на вечер пятницы, утром приезжаю в столицу региона и провожу там день до вечера, сажусь на поезд по обратному билету и уезжаю. В некоторых случаях иначе, к примеру можно посетить несколько городов подряд, если они удобно соединены."
        />
        <Paragraph
          inner="Обычно я стараюсь посещать интересные на мой взгляд заведения: тематические кафе, музеи, зоопарки, океанариумы, парки, памятники, промышленные объекты. Я редко бываю за пределами столицы региона, потому что редко там бывает что-то интересное, но конечно есть исключения. Я часто сравниваю города с Белгородом 2020 года, потому что я родом и Белгорода и уехал из него в 2020 году, то есть я таким его запомнил."
        />
        <Paragraph
          inner="Я путешествую, потому что очень люблю Россию, а ещё потому что очень люблю Kino no Tabi. Каждый раз, когда я еду в поезде, я слушаю две песни: All the way и He is speed and I am balance."
        />
      </div>
    </div>
    <div class="row">
      <div class="col">
        <Russia />
      </div>
    </div>
  </div>
</template>

<script>
import Heading1 from '@/components/typography/Heading1.vue'
import Paragraph from '@/components/typography/Paragraph.vue'
import Russia from '@/components/custom/travel/Russia.vue'

export default {
  components: {
    Heading1,
    Paragraph,
    Russia,
  },
  head() {
    return {
      title: 'Путешествую по России',
    }
  },
}
</script>
