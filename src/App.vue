<template>
  <div id="app">
    <nav class="navbar navbar-expand-md navbar-dark bg-dark ">
      <router-link class="navbar-brand" to="/">vLibrary</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarsExampleDefault"
        aria-controls="navbarsExampleDefault"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul class="navbar-nav mr-auto">
          <li  class="nav-item">
            <!-- <a class="nav-link" href="#"> -->
              <router-link class="nav-link" to="/">
              Все книги
              <span class="sr-only">(current)</span>
            <!-- Home -->
            <!-- </a> -->
              </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/topbooks">Топ Книг</router-link>
          </li>
          <!-- About -->
          <li class="nav-item">
            <router-link class="nav-link" to="/users">Топ Читателей</router-link>
          </li>
          <!-- Add Customer -->
        </ul>




        <!-- <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
          <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
        </form> -->
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {}
};
</script>

<style>
</style>
