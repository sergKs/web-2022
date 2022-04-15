<template>
  <div>
    <div class="album py-5 bg-light">
      <div class="container">

        <h1>Товар {{ id }}</h1>

        <div class="row">
          <div class="col-md-4">
            <img class="bd-placeholder-img card-img-top" src="https://avatars.mds.yandex.net/get-mpic/4322107/img_id5771335809193590584.jpeg/orig" />
          </div>
          <div class="col-md-8">
            <h4>Комкующийся наполнитель Van Cat Pine, 10 кг</h4>
            <p>
              Наполнитель Van Cat Pine для кошачьего туалета изготовлен из
              100% натурального белого бентонита. Отлично комкуется и эффективно устраняет
              неприятные запахи. Не пылит, лапы остаются чистыми.
              Способность к абсорбции — 300%. Безопасен для животных и окружающей среды.
              Экономичен в использовании. Сохраняет лоток сухим, прост в уборке.
            </p>
            <p>Стоимость:  <small class="price">100 ₽</small></p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                <button type="button" @click="addToCart" class="btn btn-success">Купить</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  data() {
    return {
      id: null
    }
  },
  created() {
    this.id = this.$route.params.id
  },
  methods: {
    addToCart() {
      this.$store.commit("addItem", {id: 10})
    }
  }
}
</script>