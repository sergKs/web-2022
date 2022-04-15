<template>
  <div class="default-layout">
    <section class="wrapper">
      <header>
        <b-navbar toggleable="lg" type="light">
          <div class="container">
            <b-navbar-brand href="#">
              <img src="https://alllogos.ru/images/logotip-purina.jpg" class="logo" />
            </b-navbar-brand>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
              <b-navbar-nav>
                <router-link class="nav-link" :to="{name: 'Catalog'}">Каталог</router-link>
                <router-link class="nav-link" :to="{name: 'About'}">О нас</router-link>
                <router-link class="nav-link" :to="{name: 'Contact'}">Контакты</router-link>

                <a @click="logout" class="nav-link" v-show="user !== null">Иван И.</a>
                <router-link class="nav-link" :to="{name: 'Login'}" v-show="user == null">Войти</router-link>
              </b-navbar-nav>
              <div class="cart">
                <cart></cart>
              </div>
            </b-collapse>
          </div>
        </b-navbar>
      </header>

      <main>
        <slot />
      </main>
    </section>

    <footer>
      <div class="container">
        <div class="d-flex justify-content-between">
          <p>&copy; КБ-191, 2022</p>
          <p class="float-right">
            <a href="#">Контакты, +7(109)00-11</a>
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>
<script>

import Cart from "@/components/cart";
export default {
  name: 'DefaultLayout',
  components: {Cart},
  data() {
    return {
      user: null
    }
  },
  created() {
    this.user = JSON.parse(localStorage.getItem('user'))
  },
  methods: {
    logout(event) {
      localStorage.removeItem('user')
      location.reload()
      event.preventDefault()
    }
  }
}
</script>