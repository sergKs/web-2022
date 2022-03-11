<template>
  <div id="app">
    <header>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <router-link to="/" class="navbar-brand">Компания КОТЭ</router-link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <router-link to="/about" class="nav-link">О нас</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/contact" class="nav-link">Контакты</router-link>
              </li>
            </ul>
            <form class="d-flex">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </header>

    <main>
      <router-view/>
    </main>

    <footer class="text-muted">
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
