<template>
  <div>
    <div class="container">
      <br />
      <br />

      <div class="row">
        <div class="col">
          <Mart title="Посетил 5 из 85 субъектов России" link="/travel/russia">
            <Russia />
          </Mart>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Mart from '@/components/layouting/Mart.vue'
import Russia from '@/components/custom/travel/Russia.vue'

export default {
  components: { Mart, Russia },
}
</script>
