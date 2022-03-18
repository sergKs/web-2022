<template>
  <div class="home">
    <section>
      <b-carousel
          id="carousel-1"
          :interval="4000"
          controls
          indicators
          img-width="1200"
          img-height="300"
      >
        <b-carousel-slide img-src="https://magizoo.ru/upload/iblock/bfb/Hills_banner_SPRL_4_1_Cat_1800x616px.jpg"></b-carousel-slide>
      </b-carousel>
    </section>

    <div class="container mt-5">

      <h4 class="mb-5">Самые просматриваемые</h4>

      <div class="row">
        <div class="col-md-3" v-for="item in products">
          <div class="mb-4">
            <section class="content">
              <router-link :to="{name: 'Product', params: {id: item.id}}" class="product-link">
                <div>
                  <img class="bd-placeholder-img card-img-top" src="https://avatars.mds.yandex.net/get-mpic/4322107/img_id5771335809193590584.jpeg/orig" />
                </div>
                <p>{{ item.name }}</p>
              </router-link>
            </section>
            <section>
              <p class="price">{{ item.price }} ₽</p>
              <div class="btn-group">
                <button type="button" class="btn btn-warning btn-cart">В корзину</button>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  data() {
    return {
      products: [
        {
          id: 1,
          name: 'Комкующийся наполнитель Van Cat Pine, 10 кг',
          price: 100
        },
        {
          id: 2,
          name: 'Комкующийся наполнитель Van Cat Pine, 10 кг',
          price: 200
        },
        {
          id: 3,
          name: 'Комкующийся наполнитель Van Cat Pine, 10 кг',
          price: 500
        },
        {
          id: 4,
          name: 'Комкующийся наполнитель Van Cat Pine, 10 кг',
          price: 6000
        }
      ]
    }
  }
}
</script>
