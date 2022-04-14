<template>
  <div class="home">

    <Slider></Slider>

    <div class="container mt-5">
      <h4 class="mb-5">Самые просматриваемые</h4>
      <div class="row">
        <div class="col-md-3" v-for="item in products">
          <div class="mb-4">
            <Product :product="item"></Product>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import Product from "@/components/product";
import Slider from '@/components/slider'

export default {
  name: 'HomeView',
  components: {Slider, Product},
  data() {
    return {
      products: [
        {
          id: 1,
          name: 'Комкующийся наполнитель Van Cat Pine, 10 кг',
          price: 100,
          inCart: false
        },
        {
          id: 2,
          name: 'Комкующийся наполнитель Van Cat Pine, 10 кг',
          price: 200,
          inCart: true
        },
        {
          id: 3,
          name: 'Комкующийся наполнитель Van Cat Pine, 10 кг',
          price: 500,
          inCart: false
        },
        {
          id: 4,
          name: 'Комкующийся наполнитель Van Cat Pine, 10 кг',
          price: 6000,
          inCart: false
        }
      ]
    }
  }
}
</script>
