<template>
  <div class="customers container p-3">
    <h1 class="page-header p-3">Книги нашей библиотеки</h1>
    <div class="container">
      <h2 class="card-title">Сортировать по</h2>
      <div class="sort-container">
        <button class="btn btn-light">Названию</button>
        <button class="btn btn-light">Автору</button>
        <button class="btn btn-light">Доступности</button>
        <button class="btn btn-light">Статусу</button>
      </div>
    </div>

    <table class="table table-striped">
      <thead>
        <tr>
          <th>Название</th>
          <th>Автор</th>
          <th>Доступность</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="book in books" v-bind:key="book.id">
          <td>{{book.title}}</td>
          <td>{{book.author}}</td>
          <td v-if="book.busy" style="color:red">Недоступна</td>
          <td v-else style="color:green">Доступна</td>
          <td>
            <router-link class="btn btn-success" v-bind:to="'/customer/'+book.id">Подробнее</router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import BooksJSON from '../Books2.JSON'

export default {
  name: "allbooks",
  data() {
    return {
      customers: [],
      books: BooksJSON
    };
  },
  methods: {
  },
  props: {},
  components: {
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .sort-container {
    width: 80%;
    display:flex;
    justify-content: space-between;
    margin: 2rem 0;
  }
</style>
