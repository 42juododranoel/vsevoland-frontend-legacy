<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col">
          <Mart title="Посетил 5 из 85 субъектов России" link="/travel/russia">
            <Russia />
          </Mart>
        </div>
      </div>

      <div class="row">
        <div class="col">
          <Mart title="Gay Play Studios" link="/books/gay-play-studios">
            <Picture source="https://cdn.vsevo.land/gay-play-studios.png" />
          </Mart>
        </div>
      </div>

      <div class="row">
        <div class="col">
          <Mart title="Herding catgirls" link="/books/herding-catgirls">
            <Picture source="https://cdn.vsevo.land/herding-catgirls.png" />
          </Mart>
        </div>
      </div>

      <div class="row">
        <div class="col">
          <Mart
            title="Всадник и ведьма"
            link="/books/the-dragonrider-and-the-witch"
          >
            <Picture
              source="https://cdn.vsevo.land/the-dragonrider-and-the-witch.jpg"
            />
          </Mart>
        </div>
      </div>

      <div class="row">
        <div class="col">
          <Mart
            title="Про себя, или Размышления на унитазе"
            link="/books/on-self"
          >
            <Picture source="https://cdn.vsevo.land/on-self.jpeg" />
          </Mart>
        </div>
      </div>

      <div class="row">
        <div class="col">
          <Mart title="Тестер книжной вёрстки" link="/book-layout-tester">
            <Picture source="https://cdn.vsevo.land/book-layout-tester.png" />
          </Mart>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Picture from '@/components/typography/Picture.vue'
import Mart from '@/components/layouting/Mart.vue'
import Russia from '@/components/custom/travel/Russia.vue'

export default {
  components: { Picture, Mart, Russia },
}
</script>
