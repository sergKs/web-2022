<template>
  <div class="container">
    <section class="login-form">
      <h1 class="text-center">Авторизация</h1>

      <form @submit="signIn" method="post">
        <div class="mb-4">
          <label>Логин</label><br>
          <input name="login" type="text" class="form-control" placeholder="Логин" v-model="login">
          <div class="error text-danger">{{ errors.login }}</div>
        </div>
        <div class="mb-4">
          <label>Пароль</label><br>
          <input name="password" type="password" class="form-control" placeholder="Пароль" v-model="password">
          <div class="error text-danger">{{ errors.password }}</div>
        </div>
        <div class="form-group text-center">
          <button type="submit" class="btn btn-success w-100">Войти</button>
        </div>
      </form>
    </section>
  </div>
</template>

<script>
export default {
  name: "LoginView",
  data() {
    return {
      login: "",
      password: "",
      errors: {
        login: "",
        password: ""
      }
    }
  },
  methods: {
    signIn(event) {
      this.errors.login = ""
      this.errors.password = ""

      if (this.login.trim().length === 0) {
        this.errors.login = "Заполните логин."
      }

      if (this.password.trim().length === 0) {
        this.errors.password = "Заполните пароль."
      }

      // если ошибок нет, то сохраняем пользователя в localStorage.
      if (this.errors.login.length === 0 && this.errors.password.length === 0) {
        // send request
        const user = {
          login: this.login,
          password: this.password
        }
        localStorage.setItem('user', JSON.stringify(user));
        location.href = '/'
      }

      event.preventDefault()
    }
  }
}
</script>

<style>
  .login-form {
    width: 400px;
    margin: 25px auto 0;
  }
</style>