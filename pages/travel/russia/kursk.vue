<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-9-md">
          <Heading1 inner="Курск" />
          <Paragraph
            no-indent="true"
            inner="Курск — это тот же Белгород, но если отмотать время до двухтысячного года, добавить трамваи и в три раза увеличить количество торговых центров, перепадов рельефа и старых зданий. Я бы не хотел жить в Курске, но уверен, что в нём вполне себе можно жить."
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
    caption:
      'Прикольно, что по пути в Курск мой автобус попал в аварию, а выслать за нами новый почему-то не выслали. Легендарный курский сервис?',
    source: '/travel/russia/kursk/wreck.jpg',
  },
  {
    caption: 'Ильич указывает путь.',
    source: '/travel/russia/kursk/lenin.jpg',
  },
  {
    caption: 'Идёшь по курской улице, а на тебя с крыши смотрит орден Великой отечественной войны.',
    source: '/travel/russia/kursk/ussr.jpg',
  },
  {
    caption:
      'Идёшь по курской улице, а тебе навстречу торговый центр, аварийка, торговый центр, совок, торговый центр, старинная усадьба, торговый центр, совок.',
    source: '/travel/russia/kursk/building.jpg',
  },
  {
    caption: 'Курск — город затерявшихся кавычек.',
    source: '/travel/russia/kursk/typography.jpg',
  },
  {
    caption:
      'Курский музей археологии мне показался неплохим, а вот планетарий был самой большой тратой времени за последние не знаю сколько лет. Хотя даже самое ужасное исполнение не испортит красоты космоса и не помешает мне лишний раз ужаснуться, насколько мы все маленькие и конечные.',
    source: '/travel/russia/kursk/skeleton.jpg',
  },
  {
    caption:
      'Традиционно последняя фотка итога города — это городские утки, но в Курске они мне не встретились, поэтому пусть будет мост с надписью ШО ТЫ.',
    source: '/travel/russia/kursk/bridge.jpg',
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
      title: 'Курск',
    }
  },
}
</script>
