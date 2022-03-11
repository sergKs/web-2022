<template>
  <div class="home">
    <section class="jumbotron text-center">
      <div class="container">
        <h1>Самые лучшие коты, только в шляпах!</h1>
        <p class="lead text-muted">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet animi aspernatur at cupiditate ducimus eaque eius ex ipsa ipsam nihil nulla provident quia, quo sequi, suscipit tempora velit veniam voluptas!
        </p>
      </div>
    </section>
    <div class="album py-5 bg-light">
      <div class="container">

        <div class="row">
          <div class="col-md-4" v-for="item in products">
            <router-link :to="{name: 'Product', params: {id: item.id}}">
              <div class="card mb-4 shadow-sm">
                <img class="bd-placeholder-img card-img-top" src="https://thumbs.dreamstime.com/z/%D0%BA%D0%BE%D1%82-%D0%B2-%D1%88%D0%BB%D1%8F%D0%BF%D0%B5-%D0%B8-%D1%81%D0%B2%D1%8F%D0%B7%D0%B8-127719637.jpg" />
                <div class="card-body">
                  <h4>{{ item.name }}</h4>
                  <p>Красивая шляпа, много отзывов, покупка, бесплатно доставить.</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button type="button" class="btn btn-success btn-cart">Купить</button>
                    </div>
                    <small class="price">{{ item.price }} ₽</small>
                  </div>
                </div>
              </div>
            </router-link>
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
          name: 'Шляпа на кота, ручная работа',
          price: 100
        },
        {
          id: 2,
          name: 'Шляпа на кота, ручная работа',
          price: 200
        },
        {
          id: 3,
          name: 'Шляпа на кота, ручная работа',
          price: 500
        },
        {
          id: 4,
          name: 'Шляпа на кота, ручная работа',
          price: 6000
        }
      ]
    }
  }
}
</script>
