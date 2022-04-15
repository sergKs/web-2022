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
      products: []
    }
  },
  created() {
    this.$http.get('/products/list?sort=name')
      .then((response) => this.products = response.data)
  }
}
</script>
