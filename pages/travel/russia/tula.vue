<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-9-md">
          <Heading1 inner="Тула" />
          <Paragraph
            no-indent="true"
            inner="Тула — это как Белгород, но если отмотать время до двухтысячного года и добавить трамваи. Всё очень убогое даже на центральных улицах, жить бы здесь вообще не хотел."
          />
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
            <Picture :source="figure.source" />
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

const contents = [
  {
    caption: 'Таких разных пряников с таким большим количеством начинки в жизни не видал.',
    source: '/travel/russia/tula/pryanik.jpg',
  },
  {
    caption: 'Даже тульские дома похожи на пряники. На фотке замечен неопознанный летающий палец.',
    source: '/travel/russia/tula/building.jpg',
  },
  {
    caption:
      'Тульский музей оружия выбесил меня всеми возможными способами: в автоматах нет безнала, навигация ужасная, информация скучная, сенсорные панели реагируют с третьего нажатия. Симулятор вертолёта настолько убог, что не даёт даже разбиться.',
    source: '/travel/russia/tula/shilka.jpg',
  },
  {
    caption:
      'И тем не менее музей оружия замечателен тем, что я увидел кучу стволов, которые раньше видел только на картинках, а некоторые даже покрутил в руках.',
    source: '/travel/russia/tula/abakan.jpg',
  },
  {
    caption: 'Это «Вал» и «Винторез».',
    source: '/travel/russia/tula/as-vss.jpg',
  },
  {
    caption: 'Суровый тульский динозавр.',
    source: '/travel/russia/tula/dinosaur.jpg',
  },
  {
    caption: 'По традиции последняя фотка — утки.',
    source: '/travel/russia/tula/ducks.jpg',
  },
]

export default {
  components: {
    Heading1,
    Paragraph,
    Figure,
  },
  data() {
    return {
      contents,
    }
  },
  head() {
    return {
      title: 'Тула',
    }
  },
}
</script>
