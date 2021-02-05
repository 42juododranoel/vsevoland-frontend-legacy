<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-9-md">
          <Heading1 inner="Воронеж" />
          <Paragraph
            no-indent="true"
            inner="Воронеж — это примерно тот же Белгород, но если отмотать время на две тысячи десятый год, взять каждый квадратный километр и в два-три раза увеличить количество всего: количество людей, магазинов, зданий, этажей."
          />

          <Paragraph
            inner="Мне очень понравилось, что Воронеж стоит на большой реке, понравилась «Гото Предестинация», пароходы, паруса, мосты. Воронеж — не супер ухоженный город, местами прям провинция, особенно за рекой, но мне было прикольно. Когда город идеально вылизан до состояния музея, он теряет живость в моих глазах, чувствуешь что он не твой, а какой-то государственный. В Воронеже такого нет, тут всё родное, русское, грязное."
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
      'Тащусь от вывесок типа «Бешеная табуретка», «Всё будет хорошо», «Центр лечения боли».',
    source: '/travel/russia/voronezh/shaurma.jpeg',
  },
  {
    caption:
      '«Божье провидение» или «Гото Предестинация» — замечательный памятник и наверняка замечательный музей, но я не попал внутрь из-за пандемии.',
    source: '/travel/russia/voronezh/ship.jpeg',
  },
  {
    caption:
      'Типичный вид на воронежскую дорогу: ничего не видно из-за ряда припаркованных машин. Ещё жаль что фиг пойми как работает общественный транспорт: то при входе платить, то при выходе, есть микроскопические маршрутки, а один раз на меня наорал водитель за то что я долго доставал деньги.',
    source: '/travel/russia/voronezh/car.jpeg',
  },
  {
    caption:
      'От океанариума веет такой аурой, будто живность пачками запихали в эти клетки, чтобы навариваться на туристах. Мне очень сложно воспринимать эту тесноту в городе с лимоном жителей, когда в белгородском зоопарке даже самый последний хомяк в своём вольере сидит как властелин вселенной.',
    source: '/travel/russia/voronezh/bird.jpeg',
  },
  {
    caption:
      'Из-за пандемии я не попал на линейный корабль, за то прокатился около него на каком-то прогулочном судне. Это моя первая фотка с длинными волосами, я тогда стеснялся их.',
    source: '/travel/russia/voronezh/me.jpeg',
  },
  {
    caption: 'Воронежский фонарный столб.',
    source: '/travel/russia/voronezh/wires.jpeg',
  },
  {
    caption: 'Воронеж — город правильных кавычек.',
    source: '/travel/russia/voronezh/typography.jpeg',
  },
  {
    caption: 'Воронежская утка.',
    source: '/travel/russia/voronezh/duck.jpeg',
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
      title: 'Воронеж',
    }
  },
}
</script>
