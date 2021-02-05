<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-9-md">
          <Heading1 inner="Воронеж" />
          <Paragraph
            inner="Воронеж — это примерно тот же Белгород, но если отмотать время на две тысячи десятый год, взять каждый квадратный километр и в два-три раза увеличить количество всего: количество людей, магазинов, зданий, этажей."
          />

          <Paragraph
            inner="Мне очень понравилось, что Воронеж стоит на большой реке, понравилась «Гото Предестинация», пароходы, паруса, мосты. Воронеж — не супер ухоженный город, местами прям провинция, особенно за рекой, но мне было прикольно. Когда город идеально вылизан до состояния музея, он теряет живость в моих глазах, чувствуешь что он не твой, а какой-то государственный. В Воронеже такого нет, тут всё родное, русское, грязное."
          />
          <img src="https://cdn.vsevo.land/travel/russia/voronezh/ship.jpeg" />

          <Paragraph
            inner="Жаль, что невозможно перейти дорогу без нужды выглядывать за ряд припаркованных машин. На фотке типичный вид на воронежскую дорогу. Ещё жаль что фиг пойми как работает общественный транспорт: то при входе платить, то при выходе, есть микроскопические маршрутки, один раз на меня наорал водитель за то что я долго доставал деньги."
          />
          <img src="https://cdn.vsevo.land/travel/russia/voronezh/car.jpeg" />

          <Paragraph
            inner="Тащусь от вывесок типа «Бешеная табуретка», «Всё будет хорошо», «Центр лечения боли»."
          />
          <img
            src="https://cdn.vsevo.land/travel/russia/voronezh/shaurma.jpeg"
          />

          <Paragraph
            inner="Сходил в воронежский океанариум, о котором трубят по радио и на вывесках по всему городу. Кого там только нет, но мне не понравилось. От океанариума веет такой аурой, будто живность пачками запихали в эти клетки, чтобы навариваться на туристах. Я не специалист по рыбам, но по-моему очевидно, что акуле, хоть и маленькой, тесно в аквариуме два на три метра. Мне очень сложно воспринимать эту тесноту в городе с лимоном жителей, когда в белгородском зоопарке даже самый захудалый хомяк в своём вольере сидит как властелин вселенной."
          />

          <img src="https://cdn.vsevo.land/travel/russia/voronezh/bird.jpeg" />
        </div>
      </div>
      <div class="row">
        <div class="col">
          <img src="https://cdn.vsevo.land/travel/russia/voronezh/me.jpeg" />

          <img src="https://cdn.vsevo.land/travel/russia/voronezh/wires.jpeg" />

          <img
            src="https://cdn.vsevo.land/travel/russia/voronezh/typography.jpeg"
          />

          <img src="https://cdn.vsevo.land/travel/russia/voronezh/duck.jpeg" />
        </div>
      </div>
      <div class="row">
        <div class="col"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Heading1 from '@/components/typography/Heading1.vue'
import Paragraph from '@/components/typography/Paragraph.vue'

export default {
  components: {
    Heading1,
    Paragraph,
  },
  head() {
    return {
      title: 'Воронеж',
    }
  },
}
</script>
