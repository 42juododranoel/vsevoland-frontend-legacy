<template>
  <div class="container">
    <Mart title="Посетил 6 из 85 субъектов России" link="/travel/russia">
      <Russia />
    </Mart>
  </div>
</template>

<script>
import Mart from '@/components/layouting/Mart.vue'
import Russia from '@/components/custom/travel/Russia.vue'

export default {
  components: { Mart, Russia },
}
</script>
